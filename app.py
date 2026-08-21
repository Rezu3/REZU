import os
import json
from flask import Flask, jsonify, render_template

app = Flask(__name__)

# সকল JSON ফাইল একত্রে লোড করার ফাংশন
def load_all_quiz_data():
    combined_batches = {}
    data_dir = os.path.join(app.root_path, 'data')

    if os.path.exists(data_dir):
        for filename in os.listdir(data_dir):
            if filename.endswith('.json'):
                file_path = os.path.join(data_dir, filename)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        file_data = json.load(f)
                        # প্রতিটি ফাইলে থাকা ব্যাচগুলোকে প্রধান তালিকায় যুক্ত করা
                        if "batches" in file_data:
                            combined_batches.update(file_data["batches"])
                except Exception as e:
                    print(f"Error loading {filename}: {e}")

    return {"batches": combined_batches}

# ১. মূল HTML পেজ
@app.route('/')
def home():
    return render_template('index.html')

# ২. সকল ব্যাচের তালিকা পাওয়ার API
@app.route('/api/batches', methods=['GET'])
def get_batches():
    data = load_all_quiz_data()
    batches = []
    for batch_id, batch_info in data.get('batches', {}).items():
        batches.append({
            'id': batch_id,
            'name': batch_info.get('name')
        })
    return jsonify(batches)

# ৩. নির্দিষ্ট ব্যাচের সাবজেক্টগুলোর তালিকা পাওয়ার API
@app.route('/api/batches/<batch_id>/subjects', methods=['GET'])
def get_subjects(batch_id):
    data = load_all_quiz_data()
    batch = data.get('batches', {}).get(batch_id)
    if not batch:
        return jsonify({'error': 'Batch not found'}), 404
    
    subjects = []
    for subject_id, subject_info in batch.get('subjects', {}).items():
        subjects.append({
            'id': subject_id,
            'name': subject_info.get('name')
        })
    return jsonify(subjects)

# ৪. নির্দিষ্ট সাবজেক্টের চ্যাপ্টারগুলোর তালিকা পাওয়ার API
@app.route('/api/batches/<batch_id>/subjects/<subject_id>/chapters', methods=['GET'])
def get_chapters(batch_id, subject_id):
    data = load_all_quiz_data()
    subject = data.get('batches', {}).get(batch_id, {}).get('subjects', {}).get(subject_id)
    if not subject:
        return jsonify({'error': 'Subject not found'}), 404
    
    chapters = []
    for chapter_id, chapter_info in subject.get('chapters', {}).items():
        chapters.append({
            'id': chapter_id,
            'name': chapter_info.get('name')
        })
    return jsonify(chapters)

# ৫. নির্দিষ্ট চ্যাপ্টারের প্রশ্নগুলোর তালিকা পাওয়ার API (ছবি ও ম্যাথ সমীকরণ সহ)
@app.route('/api/batches/<batch_id>/subjects/<subject_id>/chapters/<chapter_id>/questions', methods=['GET'])
def get_questions(batch_id, subject_id, chapter_id):
    data = load_all_quiz_data()
    chapter = (data.get('batches', {})
               .get(batch_id, {})
               .get('subjects', {})
               .get(subject_id, {})
               .get('chapters', {})
               .get(chapter_id))
    
    if not chapter:
        return jsonify({'error': 'Chapter not found'}), 404
    
    return jsonify(chapter.get('questions', []))

if __name__ == '__main__':
    app.run(debug=True)

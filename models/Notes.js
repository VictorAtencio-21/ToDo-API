
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    text: { type: String, required: true },
    todo: { type: mongoose.Schema.Types.ObjectId, ref: 'Todo', required: true },
  });
  
export default mongoose.model('Note', noteSchema);


import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import Book from './models/Book.js'; 
import User from './models/User.js'; 
import cors from 'cors';


const app = express();
app.use(cors(
  {
    origin:"https://book-library-fronted.vercel.app",
    methods:["GET", "POST"],
    credentials: true
  }         
));
app.use(express.json());

// MongoDB Connection
const mongoDBUrl = 'mongodb+srv://skg88730:Mnbvcxz@bookstore.ozlyw.mongodb.net/?retryWrites=true&w=majority&appName=bookstore'; // Your MongoDB URL
mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

// Start the server
const PORT = process.env.PORT || 8080; // Changed port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// Use the book routes
app.use('/api/books', bookRoutes);




async function seedBooks() {
     try {
       await Book.deleteMany(); // This deletes all existing books
   
       await Book.insertMany([
         { name: 'JavaScript: The Good Parts', category: 'Programming', rentPerDay: 10 },
         { name: 'Clean Code', category: 'Programming', rentPerDay: 15 },
         { name: 'The Pragmatic Programmer', category: 'Programming', rentPerDay: 12 },
         { name: 'Eloquent JavaScript', category: 'Programming', rentPerDay: 8 },
         { name: 'You Don’t Know JS', category: 'Programming', rentPerDay: 10 },
         { name: 'Introduction to Algorithms', category: 'Computer Science', rentPerDay: 20 },
         { name: 'Cracking the Coding Interview', category: 'Interview Prep', rentPerDay: 18 },
         { name: 'Design Patterns', category: 'Software Engineering', rentPerDay: 16 },
         { name: 'Refactoring', category: 'Software Engineering', rentPerDay: 14 },
         { name: 'Head First Design Patterns', category: 'Software Engineering', rentPerDay: 13 },
         { name: 'The Mythical Man-Month', category: 'Software Engineering', rentPerDay: 17 },
         { name: 'Code Complete', category: 'Software Engineering', rentPerDay: 19 },
         { name: 'Introduction to the Theory of Computation', category: 'Computer Science', rentPerDay: 20 },
         { name: 'The Art of Computer Programming', category: 'Computer Science', rentPerDay: 22 },
         { name: 'Effective Java', category: 'Programming', rentPerDay: 11 },
         { name: 'The C Programming Language', category: 'Programming', rentPerDay: 9 },
         { name: 'Operating Systems Concepts', category: 'Computer Science', rentPerDay: 21 },
         { name: 'Computer Networks', category: 'Computer Science', rentPerDay: 18 },
         { name: 'Introduction to Machine Learning', category: 'Artificial Intelligence', rentPerDay: 23 },
         { name: 'Deep Learning with Python', category: 'Artificial Intelligence', rentPerDay: 25 }
       ]);
   
       console.log('20 books inserted');
     } catch (error) {
       console.error('Error seeding books:', error);
     }
   }
   
   seedBooks();

// Function to seed Users
async function seedUsers() {
  try {
    const usersExist = await User.find();
    if (usersExist.length === 0) {
      await User.insertMany([
        { name: 'John Doe', email: 'john.doe@example.com' },
        { name: 'Jane Smith', email: 'jane.smith@example.com' },
        { name: 'Michael Johnson', email: 'michael.johnson@example.com' },
        { name: 'Emily Davis', email: 'emily.davis@example.com' },
        { name: 'Sarah Brown', email: 'sarah.brown@example.com' }
      ]);
      console.log('Sample users inserted');
    } else {
      console.log('Users already exist');
    }
  } catch (error) {
    console.error('Error seeding users:', error);
  }
}

// Call the seed functions when the server starts
seedBooks();
seedUsers();

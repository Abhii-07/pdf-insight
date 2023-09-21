# PDFInsights 📚💬

PDFInsights is an AI-powered chat application that allows users to interact with PDF documents. This application enables users to ask questions and get insights from PDF documents using natural language, making it a valuable tool for students, researchers, and professionals.

## Features 🚀

- **PDF Document Interaction**: Users can upload PDF documents and interact with their content using natural language queries.

- **Real-time Chat**: PDFInsights provides a real-time chat interface that allows users to have a conversation with the AI assistant.

- **User Authentication**: User accounts can be created and authenticated using Clerk, ensuring a secure and personalized experience.

- **Subscription Model**: PDFInsights offers a subscription model to unlock premium features.

## Technologies Used 🛠️

- **Frontend**: Next.js, Tailwind CSS, Clerk.js, React Query

- **Backend**: Pinecone AI, OpenAI

- **Database**: PineconeDB

- **AI Integration**: Pinecone AI for document embedding and retrieval

## Getting Started 🏁

### Prerequisites 📋

- Node.js and npm (Node Package Manager) installed on your machine
- Clerk API Key and Environment Configuration
- Pinecone API Key and Environment Configuration
- PDF document files for testing

### Installation 💻

1. Clone this repository:

```bash
git clone https://github.com/your-username/PDFInsights.git
cd PDFInsights
```

2. Install the project dependencies:

```bash
npm install
```

3. Set up the environment variables:

   - Create a `.env` file in the project root directory and add the following:

   ```env
   # Clerk Configuration
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=your-clerk-sign-in-url
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=your-clerk-sign-up-url
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=your-clerk-after-sign-in-url
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=your-clerk-after-sign-up-url

   # Pinecone Configuration
   PINECONE_ENVIRONMENT=your-pinecone-environment
   PINECONE_API_KEY=your-pinecone-api-key

   # MongoDB Configuration
   DATABASE_URL=your-mongodb-uri

   # Other Configuration (e.g., server port)
   PORT=3000

   # Amazon S3 Configuration
   NEXT_PUBLIC_S3_ACCESS_KEY_ID=your-s3-access-key-id
   NEXT_PUBLIC_S3_SECRET_ACCESS_KEY=your-s3-secret-access-key
   NEXT_PUBLIC_S3_BUCKET_NAME=your-s3-bucket-name

   # OpenAI Configuration
   OPENAI_API_KEY=your-openai-api-key

   # Stripe Configuration
   STRIPE_API_KEY=your-stripe-api-key
   NEXT_BASE_URL=your-next-base-url
   ```

4. Start the application:

```bash
npm run dev
```

The application should now be running on `http://localhost:3000`.

## Usage 📝

1. Visit the application in your web browser.
2. Sign in or create an account using Clerk.
3. Upload a PDF document to start a conversation with the AI assistant.
4. Ask questions or provide queries about the document content.
5. Get real-time responses and insights from the AI assistant.

## Screenshots 📷

![Screenshot (285)](https://github.com/Abhii-07/pdf-insight/assets/97459166/cf2e090a-99ff-4b6d-9884-1bf85d0c1c91)
![Screenshot (284)](https://github.com/Abhii-07/pdf-insight/assets/97459166/817b4375-44dc-4584-b469-c0062fc57e98)


## Acknowledgments 🙏

- [Clerk](https://clerk.dev/) - For user authentication and management.
- [Pinecone AI](https://www.pinecone.io/) - For AI-powered document interaction.
- [React](https://reactjs.org/) - For building the frontend user interface.
- [Tailwind CSS](https://tailwindcss.com/) - For styling the application.

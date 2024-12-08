# Voice Chat Assistant with Azure Services

A modern Next.js application that enables voice-based conversations using Azure Cognitive Services and GPT. This application provides real-time speech-to-text conversion, natural language processing, and text-to-speech responses.

## Features

- 🎤 Real-time voice recording
- 🔄 Speech-to-text conversion using Azure Cognitive Services
- 🤖 Natural language processing with Azure OpenAI GPT
- 🔊 Text-to-speech response generation
- 💬 Interactive chat interface
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 and TypeScript

## Prerequisites

Before you begin, ensure you have:

- Node.js 18.x or later
- An Azure account with the following services set up:
  - Azure Cognitive Services (Speech Services)
  - Azure OpenAI Service

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd voice-chat-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your Azure credentials:
```env
NEXT_PUBLIC_SPEECH_KEY=your_speech_key
NEXT_PUBLIC_SERVICE_REGION=your_service_region
NEXT_PUBLIC_AOAI_RESOURCE_NAME=your_aoai_resource_name
NEXT_PUBLIC_AOAI_DEPLOYMENT_NAME=your_deployment_name
NEXT_PUBLIC_AOAI_API_VERSION=your_api_version
NEXT_PUBLIC_AOAI_API_KEY=your_aoai_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── azure-openai.ts
│   ├── azure-speech.ts
│   └── config.ts
├── public/
└── components/
```

- `app/`: Next.js 14 app directory containing pages and layouts
- `lib/`: Utility functions and service integrations
- `components/`: Reusable UI components
- `public/`: Static assets

## Usage

1. Click the microphone button to start recording your voice
2. Speak your message (recording stops automatically after 5 seconds)
3. The application will:
   - Convert your speech to text
   - Process it with GPT
   - Generate an audio response
   - Display the conversation in the chat interface
4. Listen to the response using the audio player

## Key Components

### Azure Speech Service (`lib/azure-speech.ts`)
Handles speech-to-text and text-to-speech conversions using Azure Cognitive Services.

### Azure OpenAI Integration (`lib/azure-openai.ts`)
Manages communication with Azure OpenAI GPT for natural language processing.

### Configuration (`lib/config.ts`)
Contains all configuration settings and environment variable management.

## Development

### Building for Production

```bash
npm run build
```

### Running Production Build

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Best Practices

- Use TypeScript for type safety
- Follow the Next.js App Router conventions
- Implement proper error handling
- Use environment variables for sensitive information
- Keep components small and focused
- Maintain clean code structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Azure Cognitive Services](https://azure.microsoft.com/services/cognitive-services/)
- [Azure OpenAI Service](https://azure.microsoft.com/services/openai/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

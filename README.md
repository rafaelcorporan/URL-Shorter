---
title: yuupi
emoji: 🐳
colorFrom: yellow
colorTo: yellow
sdk: static
pinned: false
tags:
  - deepsite
---

# Yuupi! - URL Shortener

A modern, feature-rich URL shortener built with Next.js, TailwindCSS, DaisyUI, and Material UI.

## 🚀 Features

- **Lightning Fast**: Instant URL shortening with minimal latency
- **Custom Aliases**: Create memorable, custom short URLs
- **Expiration Settings**: Set automatic expiration for your links
- **QR Code Generation**: Generate QR codes for easy sharing
- **Analytics Tracking**: Monitor clicks and performance
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful interface with gradient animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS + DaisyUI
- **UI Components**: Material UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **QR Codes**: Material UI QR Code
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd yuupi-url-shortener
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
project/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── UrlShortener.tsx    # Main URL shortening form
│   ├── Features.tsx        # Features showcase
│   ├── Footer.tsx          # Footer component
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       └── Card.tsx
├── package.json
├── tailwind.config.js      # TailwindCSS configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Themes
The project uses DaisyUI themes. You can customize the theme in `tailwind.config.js`:

```javascript
daisyui: {
  themes: [
    {
      yuupi: {
        "primary": "#3b82f6",
        "secondary": "#8b5cf6",
        "accent": "#ec4899",
        // ... more colors
      },
    },
  ],
}
```

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use TailwindCSS classes
- Material UI components are styled with the `sx` prop

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add your API keys and other configuration here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [Material UI](https://mui.com/)
- Theme system from [DaisyUI](https://daisyui.com/)

---

Made with ❤️ by the Yuupi! team

Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference
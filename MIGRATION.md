# My Portfolio - Next.js

This portfolio has been migrated from Create React App to Next.js for better performance and SEO.

## Migration Changes

### Key Updates

1. **Routing**: Migrated from React Router to Next.js file-based routing
2. **Dependencies**: Updated to Next.js 14 with styled-components 6
3. **Environment Variables**: Changed from `REACT_APP_*` to `NEXT_PUBLIC_*`
4. **Navigation**: Updated from `useNavigate()` and `<Link>` (React Router) to Next.js `useRouter()` and `<Link>`
5. **Image Optimization**: Can use Next.js `<Image>` component for automatic optimization

### Project Structure

```
pages/
  _app.js          # App wrapper with providers and global styles
  _document.js     # Custom document with styled-components SSR
  index.js         # Home page (/)
  about.js         # About page (/about)
  works.js         # Works page (/works)
  contact.js       # Contact page (/contact)
  404.js           # Custom 404 page
  success.js       # Success page after form submission
  menu.js          # Mobile menu page
  skills.js        # Skills page
  loading.js       # Loading page
  project.js       # Individual project page

src/              # Original React components and styles (unchanged)
  components/
  context/
  pages/          # Original page components (can be removed after migration)
  styles/
  themes/

public/           # Static assets
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

or

```bash
yarn install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_USER_ID=your_emailjs_user_id

# Contentful Configuration
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_contentful_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

See `.env.local.example` for reference.

### 3. Run Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

```bash
npm run build
npm start
```

or

```bash
yarn build
yarn start
```

## Features

- ✅ Next.js 14 with App Router support
- ✅ Styled Components with SSR
- ✅ Contentful CMS integration
- ✅ EmailJS for contact form
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Flickity carousel
- ✅ Custom 404 page
- ✅ Loading states

## Technologies

- **Framework**: Next.js 14
- **Styling**: Styled Components
- **CMS**: Contentful
- **Email**: EmailJS
- **Icons**: React Icons
- **Carousel**: React Flickity

## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to set the build command to `npm run build` and output directory to `.next`.

## Environment Variables Required

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_SERVICE_ID`
- `NEXT_PUBLIC_TEMPLATE_ID`
- `NEXT_PUBLIC_USER_ID`
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`

## Notes

- The `src/pages/` directory contains the original React pages and can be removed once you've verified the migration
- The `src/App.js` and `src/index.js` files are no longer used (replaced by `pages/_app.js`)
- Public assets remain in the `/public` directory
- Styled Components are configured for SSR in `pages/_document.js`

## Performance Improvements

Next.js provides several benefits over Create React App:

- **Automatic Code Splitting**: Each page only loads necessary code
- **Server-Side Rendering**: Better SEO and initial load time
- **Image Optimization**: Automatic image optimization with next/image
- **Built-in Routing**: File-based routing without additional dependencies
- **API Routes**: Can add backend API endpoints easily

## License

Private

# MediCare Plus — Premium Healthcare Website

A fully responsive, modern healthcare website for a multi-speciality clinic.

## Quick Start

Open `index.html` in your browser, or run a local server:

```bash
# Python
python -m http.server 8080

# Node.js (if npx available)
npx serve .
```

Then visit `http://localhost:8080`

## Features

- Full-screen hero with floating cards and gradient blobs
- Sticky transparent navigation with scroll effect
- Dark mode toggle (persisted in localStorage)
- Animated statistics counters
- Medical departments grid with hover effects
- Doctor carousel with social links
- Glassmorphism appointment booking form
- AI symptom checker (demo UI)
- Health packages pricing cards
- Video consultation preview
- Patient dashboard mockup
- Testimonials carousel
- Health blog section
- FAQ accordion
- Emergency banner with ECG animation
- Google Maps integration
- Live chat widget
- WhatsApp floating button
- Scroll progress indicator
- Cookie consent
- Newsletter subscription
- Search bar (doctors, services, departments)

## Structure

```
Doctor/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Customization

- **Colors**: Edit CSS variables in `:root` at the top of `styles.css`
- **Doctors/Departments**: Edit data arrays in `js/main.js`
- **Contact info**: Update the contact section in `index.html`
- **Images**: Replace Unsplash URLs with your own images

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript enabled.

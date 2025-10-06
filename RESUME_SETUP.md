# Resume Setup Instructions

To enable the resume download functionality, follow these steps:

## Option 1: Add Resume to Public Folder (Recommended)

1. Place your resume PDF file in the `public` folder
2. Rename it to `resume.pdf`
3. The download button will automatically work

## Option 2: Use Google Drive or Dropbox

If you don't have the resume locally, you can modify the download link:

1. Open `src/components/Hero.tsx`
2. Find the `handleDownloadResume` function
3. Replace the href with your direct download link:

```typescript
const handleDownloadResume = () => {
  window.open("YOUR_DIRECT_DOWNLOAD_LINK", "_blank");
};
```

## Option 3: Link to Contact Section

If you prefer users to contact you for the resume:

1. Replace the download button with a contact link:

```typescript
<a
  href="#contact"
  className="group flex items-center gap-2 px-8 py-3.5 rounded-lg..."
>
  <FileText className="w-5 h-5" />
  <span>Contact Me</span>
</a>
```

## Creating a Placeholder Resume

If you need a temporary placeholder, create a simple text file:

```bash
echo "Harshit Raj - Resume Placeholder" > public/resume.pdf
```

Replace this with your actual resume PDF when ready.

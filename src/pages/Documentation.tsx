import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const markdownContent: string = `
# Alex Chen - Animated Machine Learning Engineer Portfolio

This is the documentation for a modern, single-page, animated portfolio website designed for a Software and Data Scientist, with a focus on Machine Learning. The project is built on the base44 platform using React, Framer Motion for animations, and Tailwind CSS for styling. The design is heavily inspired by Apple's minimalist and premium aesthetic, featuring a dark theme with blue and purple accents.

---

### Key Features

-   **Stunning Dark UI:** An elegant, Apple-inspired dark theme that is easy on the eyes.
-   **Smooth Animations:** Fluid animations and transitions on scroll and hover, powered by Framer Motion.
-   **Fully Responsive:** A mobile-first design that looks great on all devices, from phones to desktops.
-   **Component-Based Architecture:** The UI is broken down into clean, reusable React components.
-   **Interactive Sections:**
    -   **Hero:** Features an automated typing effect to introduce the professional title.
    -   **Skills:** Animated progress bars that fill up as they enter the viewport.
    -   **Projects:** A showcase of projects with hover effects and links.
    -   **Contact:** A fully functional contact form with a loading state on submission.

---

### Tech Stack

-   **Platform:** base44
-   **Framework:** React
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion
-   **Icons:** Lucide React

---

### Project Structure

The project is organized into a main page and several reusable components, promoting clean code and maintainability.

A fixed navigation bar that provides smooth scrolling between sections.
-   It maps over a list of navigation items to render the links.
-   When a link is clicked, it uses \`element.scrollIntoView({ behavior: "smooth" })\` to navigate.
-   It uses Framer Motion's \`layoutId\` prop to create a smooth animation for the active link indicator.

#### \`components/portfolio/Hero.jsx\`

The first thing a visitor sees.
-   The typing animation is created using a \`useEffect\` hook that incrementally builds the title string and updates the state.
-   Social media links have a \`whileHover\` animation to provide satisfying feedback.

#### \`components/portfolio/About.jsx\`

A two-column section that introduces you.
-   It uses Framer Motion's \`whileInView\` prop to trigger animations as the user scrolls the section into view. This is more performant than scroll-linked animations for simple enter/exit effects.
-   The left column contains the text bio, and the right column features a grid of core competencies.

#### \`components/portfolio/Projects.jsx\`

A grid layout to showcase your work.
-   Project data is stored in a \`projects\` array of objects, making it easy to add, remove, or update projects.
-   Each project card has a \`whileHover\` animation that slightly lifts the card (\`y: -10\`) and scales the image.

#### \`components/portfolio/Skills.jsx\`

Displays your technical skills with animated progress bars.
-   Similar to the About section, it uses \`whileInView\` to trigger animations.
-   Each progress bar's fill animation is controlled by a \`motion.div\` whose \`width\` is animated from \`0\` to the skill's level (e.g., \`95%\`).

#### \`components/portfolio/Contact.jsx\`

A section for visitors to get in touch.
-   The form state (name, email, message) is managed with \`useState\`.
-   The \`handleSubmit\` function simulates an API call with a \`setTimeout\` and updates the UI to show a "Sending..." state.

---

### How to Replicate & Customize This Website

You can easily adapt this template for your own portfolio. Here’s how:

#### Step 1: Create the Files

Create the file structure as outlined in the **Project Structure** section above. Copy and paste the code from each file into your own project on the base44 platform.

#### Step 2: Customize the Content

All personal information is stored directly within the components. You'll need to edit the following files:

-   **\`components/portfolio/Hero.jsx\`**:
    -   Change the name \`Alex Chen\` to your name.
    -   Update the \`fullText\` variable with your professional title(s).
    -   Update the \`href\` in the social links array to point to your profiles.

-   **\`components/portfolio/About.jsx\`**:
    -   Rewrite the paragraph text to reflect your own story and experience.

-   **\`components/portfolio/Projects.jsx\`**:
    -   Modify the \`projects\` array. Each object in the array represents one project card.
    -   **\`title\`**: Your project's title.
    -   **\`description\`**: A short, compelling description.
                -   **\`tech\`**: An array of technologies used.
    -   **\`image\`**: A URL to a high-quality image of your project. You can use services like Unsplash or upload your own.
    -   **\`github\` & \`demo\`**: Links to the code repository and live demo.

-   **\`components/portfolio/Skills.jsx\`**:
    -   Update the \`skillCategories\` array. Adjust the categories, skill names, and proficiency \`level\` (a number from 0 to 100).

-   **\`components/portfolio/Contact.jsx\`**:
    -   In the \`contactInfo\` array, change the \`value\` and \`href\` for your email, phone, and location.
    -   In the \`socialLinks\` array, update the \`href\` to your social media profiles.

#### Step 3: Customize Styling & Theme (Optional)

The colors are managed with Tailwind CSS utility classes.
-   **Primary Accents:** To change the blue and purple accent colors, search for classes like \`from-blue-500\` and \`to-purple-500\` throughout the components and replace them with your desired color palette from Tailwind.
-   **Background:** The main background is \`bg-black\` in \`pages/Portfolio.js\`. You can change this to another dark color like \`bg-gray-900\` or \`bg-zinc-900\`.

#### Step 4: Customize Animations (Optional)

Animations are handled by Framer Motion and are highly customizable.
-   Look for the \`transition\` prop in \`motion\` components.
-   You can change the \`duration\`, \`delay\`, and \`ease\` properties to alter the feel of the animations. For example, \`transition={{ duration: 1.5, ease: "easeInOut" })\`.
-   The \`whileInView\` prop is used for scroll-triggered animations. The \`viewport={{ once: true })\` setting ensures the animation only plays once. Remove it if you want the animation to replay every time it enters the screen.
`;

export default function Documentation() {
  return (
    <div className="bg-black text-white min-h-screen p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/portfolio"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <article className="prose prose-invert prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-blue-400 prose-headings:to-purple-400 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-gray-200 prose-code:text-purple-300 prose-code:bg-white/10 prose-code:p-1 prose-code:rounded-md prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/20">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
You are a highly skilled frontend developer and UI/UX designer specializing in modern, futuristic, animated websites using Vite.js and React.

Your task is to build a fully functional, visually stunning, and user-friendly portfolio website for a tech professional/company focusing on AI agents, automation, full-stack web & mobile development, cybersecurity, and data science.

---

### Key Requirements:

1. **Design & Visuals**  
   - Use the color scheme, fonts, and branding style consistent with the company site https://intelliphic.netlify.app.  
   - The design must feel futuristic, sleek, and professional with smooth animations and floating 3D objects using WebGL or Three.js (react-three-fiber preferred).  
   - Implement floating, rotating 3D shapes or objects on key pages like Home and About to emphasize innovation and tech presence.  
   - Include subtle micro-interactions and smooth page transitions throughout the site.  
   - Ensure full responsiveness for desktop, tablet, and mobile devices.

2. **Technology Stack**  
   - Use Vite.js with React functional components and hooks for fast performance and modular code.  
   - Implement client-side routing to navigate between pages seamlessly.

3. **Site Structure & Content**

   - **Home Page:**  
     - Hero section with an animated 3D logo or object.  
     - A short, engaging introduction about the professional/company.  
     - A prominent **“Download Resume” button** in the hero that triggers a direct download of the full CV PDF.  
     - Call-to-action buttons linking to Services and Contact pages.

   - **About Page:**  
     - A detailed personal/company story, vision, and values.  
     - Include animated 3D abstract shapes or a digital avatar to reflect personality and innovation.

   - **Services Page:**  
     - Dynamically generate the services list by extracting details from the provided CV and services page link.  
     - Each service must have an icon, title, and concise description, with hover or fade-in animations.

   - **Projects Page:**  
     - Showcase portfolio projects with images/screenshots, brief descriptions, technologies used, and links to demos or GitHub repos.

   - **Pricing Plans Page:**  
     - Extract pricing plan data from https://intelliphic.netlify.app/plans.  
     - Display the plans with your own creative layout and styling consistent with the overall site design.  
     - Include pricing details, features, and call-to-action buttons (e.g., “Get Plan” or “Contact Us”).

   - **Contact Page:**  
     - A contact form with fields: Name, Email, Subject, Message.  
     - Integrate EmailJS for sending form submissions using these credentials:

        ```js
        await emailjs.sendForm(
          'service_bxjr01s',
          'template_6i2m3gm',
          formRef.current,
          'D4XYWEA45ZRNzadl8'
        );
        setIsSuccess(true);
        ```

     - Display clear success or error notifications after submission.

4. **Animations & Interactivity**  
   - Use react-three-fiber or Three.js for 3D floating objects and smooth animations.  
   - Animate elements as they scroll into view with fade/slide effects.  
   - Buttons and links should have hover states and micro-interactions for engagement.

5. **Performance & SEO**  
   - Ensure the site is optimized for fast loading and SEO-friendly (proper meta tags, titles, descriptions per page).  
   - Use modular and maintainable CSS styling approaches (SCSS or styled-components) consistent with brand colors.

6. **Code Quality & Deployment**  
   - Provide clean, well-structured, and commented code.  
   - The project should be ready for easy deployment on Netlify or Vercel.

---

### Input Data:

- The full CV (to be used for the Resume PDF and service extraction).  
- The URL or raw content of the services page (https://intelliphic.netlify.app/services) for dynamic service listing.  
- The URL or raw content of the pricing plans page (https://intelliphic.netlify.app/plans) for dynamic plan rendering.

---

### Suggested Page List:

1. Home — Introduction with 3D hero and Resume download  
2. About — Story, vision, values, 3D avatar or abstract shapes  
3. Services — Dynamic service cards generated from CV & services data  
4. Projects — Portfolio showcase with images and links  
5. Pricing Plans — Creative layout showing available plans extracted from the site  
6. Contact — Contact form integrated with EmailJS

---

### Additional Notes:

- The Resume download button on Home should allow users to download the CV PDF directly without navigating away.  
- The contact form must handle errors gracefully and inform users upon successful message submission.  
- Use subtle but meaningful animations to enhance user experience without overwhelming.  
- All 3D animations and objects should be optimized for performance and not block content rendering.  
- **Feel free to design the layout, animations, and 3D elements according to your expert suggestions and best practices to make the portfolio visually striking and user-friendly.**

---

Please provide the full site plan, folder structure, and sample code snippets for the main components (Home hero with Resume download, Services dynamic rendering, Pricing plans display, Contact form with EmailJS integration, and 3D animations).

---

Thank you!

# EmailJS Template Setup Guide

## 📧 EmailJS Template Configuration

### Step 1: EmailJS Dashboard mein Template Create karein

1. **EmailJS Dashboard** par jayein: https://dashboard.emailjs.com/
2. **Email Templates** section mein jayein
3. **Create New Template** button click karein

### Step 2: Template Settings

**Template Name:** `Contact Form Notification`

**Template ID:** (Auto-generated, ya manually set karein: `template_6i2m3gm`)

### Step 3: Template Content

1. **Code Editor** mein `emailjs-template.html` file ka content paste karein
2. Ya neeche diya gaya HTML code copy karein

### Step 4: EmailJS Variables

Template mein ye variables use kiye gaye hain:
- `{{user_name}}` - User ka naam
- `{{user_email}}` - User ka email address
- `{{subject}}` - Message ka subject
- `{{message}}` - User ka message

**Important:** EmailJS automatically form fields ko map kar deta hai agar field names match karein:
- Form field: `name="user_name"` → Template variable: `{{user_name}}`
- Form field: `name="user_email"` → Template variable: `{{user_email}}`
- Form field: `name="subject"` → Template variable: `{{subject}}`
- Form field: `name="message"` → Template variable: `{{message}}`

### Step 5: Email Settings

**To Email:** Apna email address (jahan aapko notifications chahiye)
**From Name:** Devsecure Contact Form
**Reply To:** `{{user_email}}` (User ka email automatically reply-to mein set hoga)

### Step 6: Test Email

1. **Send Test Email** button click karein
2. Test data enter karein:
   - user_name: Test User
   - user_email: test@example.com
   - subject: Test Subject
   - message: This is a test message
3. Email check karein

---

## 🎨 Template Features

### Design Features:
- ✅ Modern, futuristic design (Devsecure theme ke saath match)
- ✅ Dark theme with cyan/blue accents
- ✅ Responsive design (mobile-friendly)
- ✅ Professional layout
- ✅ Gradient header
- ✅ Clean, organized information display

### Email Client Compatibility:
- ✅ Gmail (Desktop & Mobile)
- ✅ Outlook
- ✅ Apple Mail
- ✅ Yahoo Mail
- ✅ Most modern email clients

### Security Features:
- ✅ Inline CSS (email client compatibility)
- ✅ Table-based layout (reliable rendering)
- ✅ Safe HTML tags only

---

## 📝 Alternative Simple Template (Minimal Version)

Agar aapko simple template chahiye, to ye use karein:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #00b3ff; border-bottom: 2px solid #00b3ff; padding-bottom: 10px;">
            New Contact Form Submission
        </h2>
        
        <p><strong>Name:</strong> {{user_name}}</p>
        <p><strong>Email:</strong> <a href="mailto:{{user_email}}">{{user_email}}</a></p>
        <p><strong>Subject:</strong> {{subject}}</p>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00b3ff;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
            This email was sent from the Devsecure contact form.
        </p>
    </div>
</body>
</html>
```

---

## 🔧 Troubleshooting

### Problem: Email variables show as `{{variable_name}}` instead of actual values

**Solution:**
- Check karein ke form field names exactly match karein:
  - Form: `name="user_name"` → Template: `{{user_name}}`
- EmailJS dashboard mein template variables verify karein

### Problem: Email formatting broken

**Solution:**
- Inline CSS use karein (external stylesheets email clients mein kaam nahi karte)
- Table-based layout use karein
- Complex CSS properties avoid karein (flexbox, grid, etc.)

### Problem: Images not showing

**Solution:**
- Images ke liye absolute URLs use karein (not relative paths)
- Or images ko base64 encode karein

---

## 📧 Current EmailJS Configuration

Aapke current setup:
- **Service ID:** `service_g7h955w`
- **Template ID:** `template_6i2m3gm`
- **Public Key:** `D4XYWEA45ZRNzadl8`

---

## ✅ Checklist

- [ ] EmailJS account setup
- [ ] Email service configured
- [ ] Template created with HTML content
- [ ] Template variables verified
- [ ] Test email sent successfully
- [ ] Form submission tested
- [ ] Email received and verified

---

**Note:** Template file (`emailjs-template.html`) ko EmailJS dashboard mein paste karein aur save karein. Template automatically form data ko map kar lega.


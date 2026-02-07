# Security Implementation Guide

## 🔒 Security Features Implemented

This portfolio includes comprehensive security measures to protect against common web vulnerabilities.

### 1. Content Security & HTTP Headers

**Location:** `index.html`

Security headers added:
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts browser features (geolocation, camera, microphone)

### 2. Input Sanitization & Validation

**Location:** `src/utils/security.js`

Implemented utilities:
- **sanitizeInput()** - Removes HTML tags and dangerous characters
- **validateEmail()** - Validates email format (RFC compliant)
- **validateName()** - Validates name (2-100 chars, letters/spaces/hyphens)
- **validateMessage()** - Validates message length (10-5000 chars)
- **rateLimit()** - Client-side rate limiting using localStorage
- **sanitizeFormData()** - Sanitizes entire form objects
- **isSafeURL()** - Checks for dangerous URL protocols

### 3. Contact Form Security

**Location:** `src/components/Contact.jsx`

Enhanced security features:
- Real-time input sanitization
- Client-side validation with error messages
- Rate limiting (3 submissions per minute)
- Maximum input length restrictions
- Protection against XSS attacks
- Environment variable usage for API keys

### 4. Environment Variables

**Files:** `.env.example` and `.env` (create from example)

EmailJS credentials stored securely:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Never commit `.env` file to git (already in `.gitignore`)

## 🚀 Deployment Security

### For Production Environments (Vercel/Netlify)

1. **Set Environment Variables:**
   - Add your EmailJS credentials in the hosting dashboard
   - Use the same variable names as in `.env.example`

2. **Enable HTTPS:**
   - Both Vercel and Netlify provide automatic HTTPS
   - Ensure "Force HTTPS" is enabled

3. **Set Additional Headers (Optional):**

**Vercel** - Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    }
  ]
}
```

**Netlify** - Create `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

## 🛡️ Best Practices

### Regular Maintenance

1. **Update Dependencies:**
   ```bash
   npm audit
   npm audit fix
   npm update
   ```

2. **Check for Vulnerabilities:**
   ```bash
   npm audit --audit-level=moderate
   ```

3. **Remove Unused Packages:**
   ```bash
   npm prune
   ```

### Code Security

- ✅ Never use `dangerouslySetInnerHTML` unless absolutely necessary
- ✅ Always validate and sanitize user inputs
- ✅ Keep dependencies up to date
- ✅ Use environment variables for sensitive data
- ✅ Implement rate limiting on forms
- ✅ Use HTTPS in production
- ❌ Never commit API keys or secrets
- ❌ Never trust client-side validation alone (add server-side validation if using backend)

### Form Submission Security

Current implementation:
- Client-side sanitization and validation
- Rate limiting (3 requests per minute)
- Input length restrictions
- Email format validation

**Recommended enhancements for production:**
- Add Google reCAPTCHA v3 to prevent bot submissions
- Implement server-side validation if using your own backend
- Consider adding honeypot fields for additional bot protection

## 📋 Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   copy .env.example .env
   ```

3. **Configure EmailJS:**
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Create an account and service
   - Create an email template
   - Get your credentials and add to `.env`

4. **Test security features:**
   - Try submitting invalid data
   - Test rate limiting (submit 4 times quickly)
   - Verify input sanitization works

## 🔍 Security Checklist

- [x] HTTP security headers implemented
- [x] Input sanitization on all form fields
- [x] Client-side validation with error messages
- [x] Rate limiting on form submissions
- [x] Environment variables for sensitive data
- [x] Maximum input length restrictions
- [x] XSS protection
- [x] Email validation
- [ ] CAPTCHA (recommended for production)
- [ ] Server-side validation (if using backend)
- [ ] Security audit with tools like OWASP ZAP

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

## 🆘 Support

If you encounter security issues:
1. Do not post them publicly
2. Review the code in `src/utils/security.js`
3. Check browser console for validation errors
4. Verify environment variables are set correctly

---

**Last Updated:** February 2026
**Security Level:** Medium (suitable for personal portfolios)

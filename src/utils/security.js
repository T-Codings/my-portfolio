/**
 * Security utilities for input sanitization and validation
 */

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - The user input to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''
  
  // Remove HTML tags and escape special characters
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .trim()
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Validate name field
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid name
 */
export const validateName = (name) => {
  return name.length >= 2 && name.length <= 100 && /^[a-zA-Z\s'-]+$/.test(name)
}

/**
 * Validate message length
 * @param {string} message - Message to validate
 * @returns {boolean} - True if valid message length
 */
export const validateMessage = (message) => {
  return message.length >= 10 && message.length <= 5000
}

/**
 * Rate limiter using localStorage
 * @param {string} key - Key to identify the action
 * @param {number} maxAttempts - Maximum attempts allowed
 * @param {number} timeWindow - Time window in milliseconds
 * @returns {boolean} - True if action is allowed
 */
export const rateLimit = (key, maxAttempts = 3, timeWindow = 60000) => {
  try {
    const now = Date.now()
    const attempts = JSON.parse(localStorage.getItem(key) || '[]')
    
    // Filter out old attempts outside the time window
    const recentAttempts = attempts.filter(timestamp => now - timestamp < timeWindow)
    
    if (recentAttempts.length >= maxAttempts) {
      return false // Rate limit exceeded
    }
    
    // Add current attempt
    recentAttempts.push(now)
    localStorage.setItem(key, JSON.stringify(recentAttempts))
    
    return true // Action allowed
  } catch (error) {
    console.error('Rate limiting error:', error)
    return true // Allow on error to avoid blocking legitimate users
  }
}

/**
 * Clear rate limit data for a specific key
 * @param {string} key - Key to clear
 */
export const clearRateLimit = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error('Error clearing rate limit:', error)
  }
}

/**
 * Sanitize form data object
 * @param {Object} formData - Form data object to sanitize
 * @returns {Object} - Sanitized form data
 */
export const sanitizeFormData = (formData) => {
  const sanitized = {}
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

/**
 * Check if URL is safe (no javascript: or data: protocols)
 * @param {string} url - URL to validate
 * @returns {boolean} - True if URL is safe
 */
export const isSafeURL = (url) => {
  if (!url) return false
  
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:']
  const lowerURL = url.toLowerCase().trim()
  
  return !dangerousProtocols.some(protocol => lowerURL.startsWith(protocol))
}

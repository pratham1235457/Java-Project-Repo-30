# 🤝 Contributing to Password Generator

Thank you for your interest in contributing to the Password Generator project! We welcome contributions of all kinds.

## 🚀 Ways to Contribute

- 🐛 **Bug Reports**: Found a bug? Let us know!
- 💡 **Feature Requests**: Have an idea? We'd love to hear it!
- 📚 **Documentation**: Help improve our docs
- 💻 **Code**: Submit bug fixes or new features
- 🎨 **Design**: Improve the UI/UX

## 🛠️ Contribution Setup

1. 🍴 **Fork the repository**

   ```
   git clone https://github.com/alamimran613/password-generator.git
   cd password-generator
   ```

2. 🌱 **Create a branch**

   ```
   git checkout -b feature/your-feature-name
   ```

3. ✏️ **Make your changes**

   - Edit HTML, CSS, or JavaScript files
   - Test in multiple browsers

4. 🧪 **Test your changes**
   - Open `index.html` in different browsers
   - Test on mobile devices
   - Verify all features work correctly

## 📋 Contribution Guidelines

### 💻 Code Standards

- ✨ **Clean Code**: Write readable, well-commented code
- 🎯 **Consistent Style**: Follow existing code formatting
- 🚫 **No Dependencies**: Keep it vanilla JavaScript only
- 🌐 **Browser Support**: Ensure compatibility with modern browsers

### 🔤 Adding New Character Sets

To add new character sets (e.g., extended Unicode, custom symbols):

1. 📝 **Update `script.js`**:

   ```js
   function getRandomCustom() {
     const customChars = 'your-custom-characters-here';
     return customChars[Math.floor(Math.random() * customChars.length)];
   }
   ```

2. ➕ **Add to `randomFunc` object**:

   ```js
   const randomFunc = {
     // existing functions...
     custom: getRandomCustom
   };
   ```

3. 🔧 **Update HTML**:

   ```html
   <label><input type="checkbox" id="custom"> Include Custom Characters</label>
   ```

4. 🎨 **Update CSS** if needed for new UI elements

### ✨ Adding New Features

Ideas for new features:

- 📝 **Password History**: Store last 10 generated passwords
- 💾 **Export Options**: Save passwords to file
- 🌙 **Themes**: Dark/light mode toggle
- 📋 **Password Templates**: Predefined patterns
- 🔢 **Bulk Generation**: Generate multiple passwords at once

### 🛡️ Security Considerations

When contributing, always consider:

- 🏠 **Client-side only**: Never send data to servers
- 🚫 **No storage**: Don't store passwords anywhere
- 🎲 **Secure randomness**: Use appropriate random functions
- 🔒 **Privacy**: Maintain user privacy at all costs

## 🐛 Bug Reports

When reporting bugs, please include:

- 🌐 **Browser and version**
- 💻 **Operating system**
- 📝 **Steps to reproduce**
- ✅ **Expected behavior**
- ❌ **Actual behavior**
- 📸 **Screenshots** (if applicable)

Use this template:

```
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen.

**Screenshots**
Add screenshots if helpful.

**Environment**
- Browser: [e.g. Chrome 91]
- OS: [e.g. macOS 12.0]
- Device: [e.g. iPhone 12, Desktop]
```

## 💡 Feature Requests

For feature requests, please:

- 🔍 **Check existing issues** first
- 📝 **Describe the feature** clearly
- 📋 **Explain the use case**
- 💭 **Consider implementation** if possible

## 🔄 Pull Request Process

1. 📖 **Update documentation** if needed
2. 🧪 **Test thoroughly** across browsers
3. 💬 **Write clear commit messages**
4. 📸 **Include screenshots** for UI changes
5. 🔗 **Reference related issues**

### 💬 Commit Message Format

```
type(scope): brief description

Longer explanation if needed

Fixes #123
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`

## 🎯 Good First Issues

New contributors can start with:

- 📱 **Mobile responsiveness improvements**
- 🎨 **CSS styling enhancements**
- 📚 **Documentation updates**
- ⚙️ **Simple feature additions**
- 🐛 **Bug fixes**

## 🌟 Community

- 🤝 Be respectful and inclusive
- 🌱 Help others learn and grow
- 💬 Provide constructive feedback
- 📜 Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## 🏆 Recognition

Contributors will be:

- 📝 **Listed in README.md**
- 📢 **Mentioned in release notes**
- 🎖️ **Given appropriate credit**

## ❓ Questions?

- 💬 **Discussions**: [GitHub Discussions](https://github.com/alamimran613/password-generator/discussions)
- 📧 **Email**: [alamimran613@live.com](mailto:alamimran613@live.com)
- 💡 **Ideas**: Open an issue with the `enhancement` label

---

Thank you for contributing! 🙏

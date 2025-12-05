const generateBtn = document.getElementById('generate');
const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const strengthResult = document.getElementById('strength-result');
const copyMessage = document.getElementById('copyMessage');

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.|~?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function calculateStrength(password) {
  let strength = 0;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  if (password.length >= 12) strength += 1;

  switch (strength) {
    case 5:
      return 'Very Strong';
    case 4:
      return 'Strong';
    case 3:
      return 'Medium';
    case 2:
      return 'Weak';
    default:
      return 'Very Weak';
  }
}

function generatePassword() {
  const length = +lengthInput.value;
  const hasUpper = uppercaseCheckbox.checked;
  const hasLower = lowercaseCheckbox.checked;
  const hasNumber = numbersCheckbox.checked;
  const hasSymbol = symbolsCheckbox.checked;
  
  let generatedPassword = '';
  const typesCount = hasUpper + hasLower + hasNumber + hasSymbol;
  
  if (typesCount === 0) {
    alert('Please select at least one character type');
    return;
  }
  
  const typesArr = [{upper: hasUpper}, {lower: hasLower}, {number: hasNumber}, {symbol: hasSymbol}].filter(item => Object.values(item)[0]);
  
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  
  const finalPassword = generatedPassword.slice(0, length);
  passwordInput.value = finalPassword;
  strengthResult.textContent = calculateStrength(finalPassword);
}

function copyPassword() {
  const password = passwordInput.value;
  if (!password) return;
  
  navigator.clipboard.writeText(password).then(() => {
    copyMessage.style.display = 'block';
    setTimeout(() => {
      copyMessage.style.display = 'none';
    }, 2000);
  });
}

generateBtn.addEventListener('click', generatePassword);
passwordInput.addEventListener('click', copyPassword);

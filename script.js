// انتظار تحميل DOM بالكامل
document.addEventListener('DOMContentLoaded', function() {
  console.log('الموقع جاهز للعمل!');
  
  // مثال على وظيفة بسيطة
  function greetUser() {
    alert('مرحبًا بك في موقعنا!');
  }
  
  // مثال على معالج حدث
  const button = document.querySelector('#myButton');
  if (button) {
    button.addEventListener('click', function() {
      console.log('تم النقر على الزر');
      greetUser();
    });
  }
  
  // يمكنك إضافة المزيد من الوظائف هنا
  function calculateSum(a, b) {
    return a + b;
  }
  
  // مثال على استخدام الوظيفة
  console.log('ناتج الجمع: ', calculateSum(5, 3));
});
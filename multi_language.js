var arrLang = {
    'en': {
        //header
      'home': 'Home',
      'about': 'About Us',
      'contact': 'Contact Us',
      'category': 'Category',
      "reg": 'Registration',
      "log-in": 'Log In',
        //registration
      "name" : 'Name',
      "surname": 'Surname',
      "password": 'Password',
      "show_psw": 'Show Password',
      "re_password": 'Re-Password',
      "phone": 'Phone',
      "country": 'Country',
      "city": 'City',
      "submit": 'Submit',
        //authorize
      "auth":'Authorization',
      "mail": 'Email',
      "password": 'Password',
      "save": 'Save',
        //category
      "book_list1": "Information Technology",
      "book_list2": "Engineering",
      "book_list3": "Energy and Telecommunications",
        //book area
        "new_book": "Information Technology",
        "new_book2": "Engineering",
    },
    'ge': {
        //header
      'home': 'მთავარი',
      'about': 'ჩვენს შესახებ',
      'contact': 'კონტაქტი',
      'category': 'კატეგორია',
        //registration
      "name" : 'სახელი',
      "reg": 'რეგისტრაცია',
      "log-in": 'შესვლა',
      "name" : 'სახელი',
      "surname": 'გვარი',
      "password": 'პაროლი',
      "show_psw": 'პაროლის ჩვენება',
      "re_password": 'გაიმეორეთ პაროლი',
      "phone": 'ტელეფონი',
      "country": 'ქვეყანა',
      "city": 'ქალაქი',
      "submit": 'შესვლა',
        //authorize
        "auth":'ავტორიზაცია',
        "mail": 'ელ.ფოსტა',
        "password": 'პაროლი',
        "save": 'დამახსოვრება',
        //category
      "book_list1": "ინფორმაციული ტექნოლოგიები",
      "book_list2": "სამშენებლო",
      "book_list3": "ენერგეტიკა",
      //book area
      "new_book": "ინფორმაციული ტექნოლოგიები",
      "new_book2": "სამშენებლო",
    }
  };
  $(function() {
    lang = localStorage.getItem('lang')
    if(lang != 'undefined'){
      translate(lang)
    }
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      localStorage.setItem('lang', lang)
      translate(lang)
    });
  });

function translate(lang){
  $('.lang').each(function(index, item) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });

  $('.lang_placeholder').each(function(index, item) {
    $(this).attr("placeholder", arrLang[lang][$(this).attr('key')]);
  });
}
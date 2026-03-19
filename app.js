const resources = {
  en: {
    translation: {
      "g1": "Peace ", "g2": " be upon you ", "g3": " and mercy of Allah ", "g4": " and His ", "g5": " blessings",
      "praise": "Prayers upon Muhammad ",
      "announcement": "By the grace of God, the Minecraft Arabic Kingdom has been established",
      "rules_title": "📜⛔ General Rules",
      "welcome": "First, welcome to all the guys and girls",
      "r1": "No killing without a reason",
      "r2": "No destroying houses built by your friends",
      "r3": "No hacking",
      "r4": "We will start the server from scratch",
      "r5": "Version: 1.21.7",
      "r6": "Mods will be added later",
      "success": "The server will succeed. Thank you for your cooperation",
      "chat_title": "Chat Rules",
      "banned_label": "Banned Emojis",
      "c1": "No insulting", "admin_label": "Admin", "or": "or", "member_label": "Member",
      "c2": "Don't be a parrot", "c3": "No +18 emojis", "c4": "No +18 content",
      "c5": "No fighting", "c6": "No insulting in private", "c7": "No encoded language",
      "c8": "No lying", "c9": "No insulting emojis", "c10": "No bullying",
      "c11": "Don't be too arrogant", "c12": "No spamming", "chat_label": "Chat", "stickers_label": "Stickers",
      "c13": "Admin rules are the same as member rules",
      "c14": "You can warn (admin or member) if they don't follow rules",
      "c15": "No +18 links allowed", "c16": "No +18 talk",
      "c17": "No calling the group frequently", "c18": "No asking for Admin",
      "c19": "No bullying/domineering", "c20": "No racism",
      "c21": "Finally, no exploiting religion for likes",
      "king": "The King", "king_name": "Fire🔥",
      "minister": "The Minister", "min_name": "Alam☘️",
      "deputy": "The Deputy", "dep_name": "Snow_"
    }
  },
  ar: {
    translation: {
      "g1": "آلُـۜسـۨۚـ", "g2": "ـِۖلُأمٌ ؏ـليۜـــ", "g3": "ـكـۜم وݛحـٍّْـٍّْـٍّْمهة الًـًٍۖـٍـٍۖـًٍٍٍّلـًٍلۖهًٍۖ. تَـــ", "g4": "ـعالــــى وبـۗـۗـۗـۗـۗـۗركۧۧــۧۧۧۧۧـۗـۗ", "g5": "ـۗـۗاته",
      "praise": "صــلـــوا على محــــمــــ",
      "announcement": "تٌمً بًحًمًدٍ آلَلَهّ تأسيس المملكة العربية الماينكرافتية",
      "rules_title": "📜⛔ القوانين",
      "welcome": "أولا أهلا بالشباب و البنات",
      "r1": "ممنوع الجلد بدون سبب",
      "r2": "ممنوع تدمير البيت الذي بناه صديقك",
      "r3": "ممنوع التهكير",
      "r4": "سنبدأ السيرفر من الصفر",
      "r5": "الإصدار: 1.21.7",
      "r6": "المودات سأضعهم لاحقا",
      "success": "سينجح السيرفر شكرا لتقبلكم",
      "chat_title": "قوانين الشات",
      "banned_label": "الايموجيات الممنوعة",
      "c1": "ممنوع تشتم", "admin_label": "ادمن", "or": "او", "member_label": "عضو",
      "c2": "ممنوع تكون ببغاء", "c3": "ممنوع ايموجي +18", "c4": "ممنوع اي شئ فيه محتوي 18+",
      "c5": "ممنوع خناقات", "c6": "ممنوع سب في الخاص", "c7": "ممنوع لغة التشفير",
      "c8": "ممنوع الكذب", "c9": "ممنوع ايموجي سب", "c10": "ممنوع التنمر",
      "c11": "ممنوع تكون كتير متكبر", "c12": "ممنوع السبام", "chat_label": "شات", "stickers_label": "ملصقات",
      "c13": "قوانين الادمن هي نفس قوانين الاعضاء",
      "c14": "تقدر تعطي انذار للـ (ادمن او عضو) اذا ما التزم بالقوانين",
      "c15": "مو مسموح بأي روابط+18", "c16": "ممنوع كلام +18",
      "c17": "ممنوع الاتصال عل المجموعة كثيراً", "c18": "ممنوع طلب ادمن",
      "c19": "ممنوع التسلط", "c20": "ممنوع العنصرية",
      "c21": "و اخيرا ممنوع استغلال الدين من اجل الايكات",
      "king": "الـــــمـــلك", "king_name": "فاير🔥",
      "minister": "الوزير", "min_name": "علم☘️",
      "deputy": "نائبه", "dep_name": "سنو_"
    }
  }
};

// Initialize i18next
i18next.init({
  lng: 'ar', // Default language
  resources
}, function (err, t) {
  updateContent();
});

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
  });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
    const htmlTag = document.getElementById('main-html');
    htmlTag.dir = lng === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = lng;
  });
}
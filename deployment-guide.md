# מדריך העלאת אפליקציית "סופש" לאוויר

## מה יש לך בפרויקט

```
sofash-pwa/
  index.html          - דף הבית עם מסך טעינה
  package.json         - תלויות הפרויקט
  vite.config.js       - הגדרות בנייה + PWA
  vercel.json          - הגדרות Vercel
  public/
    favicon.svg        - אייקון לשונית
    icon-192.png       - אייקון PWA קטן
    icon-512.png       - אייקון PWA גדול
  src/
    main.jsx           - נקודת כניסה + ניתוב
    App.jsx            - האפליקציה למשתמשים
    Dashboard.jsx      - דשבורד ניהול מודעות
```

## כתובות

- `yourdomain.com` - האפליקציה למשתמשים
- `yourdomain.com/#dashboard` - דשבורד ניהול

---

## אפשרות א': העלאה ל-Vercel (מומלץ, חינם)

### שלב 1: צור חשבון GitHub
1. היכנס ל-github.com ולחץ "Sign up"
2. צור חשבון חינמי עם המייל שלך

### שלב 2: העלה את הפרויקט ל-GitHub
1. לחץ על "+" בפינה הימנית עליונה ובחר "New repository"
2. שם: `sofash-app`
3. לחץ "Create repository"
4. לחץ "uploading an existing file"
5. גרור את כל הקבצים מתיקיית sofash-pwa לתוך העמוד
6. לחץ "Commit changes"

### שלב 3: חבר ל-Vercel
1. היכנס ל-vercel.com ולחץ "Sign Up" עם חשבון GitHub
2. לחץ "Add New" ואז "Project"
3. בחר את ה-repository "sofash-app"
4. Vercel יזהה אוטומטית שזה פרויקט Vite
5. לחץ "Deploy"
6. תוך דקה תקבל כתובת כמו: `sofash-app.vercel.app`

### שלב 4: חבר דומיין (אופציונלי)
1. קנה דומיין (sofash.co.il) דרך אתר כמו namecheap.com
2. ב-Vercel: Settings > Domains > הוסף את הדומיין
3. עדכן DNS לפי ההוראות של Vercel

---

## אפשרות ב': העלאה ל-Netlify (חינם, קל יותר)

### שלב 1: בנה את הפרויקט מקומית
```bash
cd sofash-pwa
npm install
npm run build
```

### שלב 2: העלה ל-Netlify
1. היכנס ל-app.netlify.com
2. גרור את תיקיית `dist` שנוצרה לתוך "Deploy manually"
3. מיד תקבל כתובת חיה!

---

## אפשרות ג': הרצה מקומית לבדיקה

```bash
cd sofash-pwa
npm install
npm run dev
```

פתח בדפדפן: http://localhost:5173

---

## שלבים הבאים (כשמוכנים)

1. **Backend** - הוסף Supabase (חינם) לבסיס נתונים, הרשמת משתמשים, ואחסון
2. **תשלומים** - חבר Stripe או PayPlus לקבלת תשלומים מעסקים
3. **אנליטיקס** - הוסף Google Analytics למעקב אחר שימוש
4. **Push Notifications** - הוסף OneSignal לשליחת התראות שבועיות
5. **React Native** - כשיש 500+ משתמשים, בנה אפליקציה לחנויות

# Storage Cleanup Instructions

## 🧹 How to Clean localStorage

### Method 1: Use Cleanup Tool (Recommended)

1. **Open the cleanup page**:
   ```
   http://localhost:8000/cleanup-storage.html
   ```

2. **Click "Clean & Update Storage" button**

3. **Done!** Storage will be cleaned automatically

---

### Method 2: Manual Cleanup (Browser Console)

1. **Open browser console**: Press `F12`

2. **Copy and paste this code**:
```javascript
// Correct file list
const correctVideos = [
    'vijay 1.1.mp4',
    '3.mp4',
    'HELLO SURAT 1.1.mp4',
    'himaksh.mp4',
    'lagan geet highlight 1.mp4'
];

const correctImages = [
    { name: '_sufi night ( birthdat ).jpg', type: 'image/jpeg' },
    { name: '_hanumant events officia poster.png', type: 'image/png' }
];

// Create clean media list
const cleanMedia = [];

// Add videos
correctVideos.forEach(videoName => {
    cleanMedia.push({
        name: videoName,
        url: `assets/videos/${videoName}`,
        type: 'video/mp4',
        size: 0,
        timestamp: Date.now(),
        isLocal: true,
        isProjectFile: true
    });
});

// Add images
correctImages.forEach(image => {
    cleanMedia.push({
        name: image.name,
        url: `assets/images/${image.name}`,
        type: image.type,
        size: 0,
        timestamp: Date.now(),
        isLocal: true,
        isProjectFile: true
    });
});

// Save to localStorage
localStorage.setItem('uploaded_media', JSON.stringify(cleanMedia));

console.log('✅ Storage cleaned! Now ' + cleanMedia.length + ' items');
```

3. **Press Enter**

4. **Refresh page**: `Ctrl + R` or `F5`

---

### Method 3: Complete Reset

1. **Open browser console**: Press `F12`

2. **Type**: `localStorage.clear()`

3. **Press Enter**

4. **Refresh page**: `Ctrl + R` or `F5`

5. **Portfolio will auto-populate** with 7 correct items

---

## ✅ What Gets Removed

### Deleted Videos (Will be removed):
- ❌ ayush 1.mp4
- ❌ chintan jumkha.mp4
- ❌ deepak 1.mp4
- ❌ jara so 0.mp4
- ❌ vanadan.mp4

### Kept Files (Will remain):
- ✅ vijay 1.1.mp4
- ✅ 3.mp4
- ✅ HELLO SURAT 1.1.mp4
- ✅ himaksh.mp4
- ✅ lagan geet highlight 1.mp4
- ✅ _sufi night ( birthdat ).jpg
- ✅ _hanumant events officia poster.png

---

## 🎯 Expected Result

After cleanup:
- **Total Items**: 7 (5 videos + 2 images)
- **All files working**: No broken links
- **Portfolio loads**: Instantly on both pages
- **Admin panel**: Shows correct 7 items

---

## 🔄 Verification Steps

1. **Open main website**: http://localhost:8000/index.html
2. **Check portfolio section**: Should show 7 items
3. **Click on videos**: All should play
4. **Click on images**: All should display
5. **Open admin panel**: http://localhost:8000/admin/login.html
6. **Check media grid**: Should show 7 items

---

## 📝 Notes

- Cleanup is **safe** - only removes deleted files
- **No data loss** - keeps all existing valid files
- **Automatic** - runs on page load if using Method 3
- **Reversible** - can always re-run cleanup

---

## ✅ Status

After cleanup, your portfolio will have:
- ✅ 5 working videos
- ✅ 2 working images
- ✅ No broken links
- ✅ Clean storage
- ✅ Fast loading

**Ready to use!** 🚀

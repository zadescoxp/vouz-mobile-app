# Vouz — No-Login File Sharing Platform

Vouz is a minimal, modern, mobile-first file sharing platform designed for speed, simplicity, and zero friction. No accounts, no clutter—just create a locker, share a key, and start collaborating instantly.

---

## ✨ Core Concept

Vouz revolves around **lockers**—secure spaces where users can upload, organize, and share files using two types of keys:

* **Public Key**

  * View files
  * Download files
  * Share files
  * Print files
  * View file details
  * Preview supported files

* **Master Key**

  * Full control over the locker
  * Upload, delete, edit files
  * Manage folders
  * Rename, duplicate, and move files
  * Pin important files
  * Generate file-specific keys
  * Customize folder colors
  * Upgrade locker capacity, speed, and security

---

## 📱 UI/UX Philosophy

Vouz is built with a **mobile-first, ultra-minimal design** inspired by modern products like Google Drive and Vercel, while avoiding generic UI patterns.

### Design Principles:

* Clean, distraction-free interface
* Dark theme with subtle contrasts
* No unnecessary navigation layers
* Bottom sheets for actions (mobile-native feel)
* Touch-friendly interactions
* Clear visual hierarchy
* Fast, intuitive workflows

---

## 📦 Features

### 🔐 Locker System

* Create lockers instantly (no login required)
* Each locker has:

  * A **Master Key** (full access)
  * A **Public Key** (read-only access)
* Display:

  * Total storage
  * Used storage
  * Available space

---

### 📁 Folder Support

* Create folders inside lockers
* Move files between folders
* Master users can:

  * Rename folders
  * Change folder colors (custom palette)
* Grid-based folder layout for quick navigation

---

### 📄 File Management

#### Public Key Access:

* Preview files
* Download files
* Share files
* Print files
* View file details

#### Master Key Access:

* All public actions +
* Pin/unpin files (shown in priority section)
* Rename files
* Duplicate files
* Move files between folders
* Delete files
* Generate **file-specific access keys**

---

### 📝 Notes

* Each locker includes a **text note section**
* Useful for:

  * Instructions
  * Descriptions
  * Shared context

---

### 🚀 Locker Upgrade

Master users can upgrade lockers to:

* Increase storage capacity
* Improve upload speed
* Enhance security

---

## 🧠 UX Decisions

* **No login** → reduces friction, faster adoption
* **Key-based access** → simple and powerful permission system
* **Bottom drawers** → keeps UI clean while exposing actions
* **Pinned files** → quick access to important content
* **Color-coded folders** → visual organization without clutter
* **Minimal UI** → reduces cognitive load

---

## 🔮 Future Enhancements

* Drag & drop uploads
* File previews (PDF, images, videos)
* Shareable links with embedded keys
* Expiry-based access keys
* Real-time collaboration indicators
* Offline access support
* End-to-end encryption (advanced security tier)

---

## ⚙️ Tech Considerations

To fully implement Vouz, a backend is required for:

* File storage
* Locker persistence
* Key validation
* Access control

Recommended stack:

* **Frontend:** React Native / Flutter
* **Backend:** Supabase / Firebase / Custom API
* **Storage:** Cloud object storage (S3 or equivalent)

---

## 🧩 Philosophy

Vouz is built on one idea:

> File sharing should be instant, simple, and invisible.

No accounts. No friction. Just access.

---

## 📌 Status

UI/UX design complete
Core features defined
Ready for backend integration and production build

---

## 👤 Author

Namit Raj
Prasanna Sharma
Priya Raj Laxmi


---

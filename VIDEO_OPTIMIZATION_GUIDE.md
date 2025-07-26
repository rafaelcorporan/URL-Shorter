# Video Optimization Guide for Portfolio Website

## 🎯 **Recommended Video Specifications**

### **Primary Format: WebM (VP9)**
```
Resolution: 1920x1080 (1080p) or 1280x720 (720p)
Frame Rate: 24-30 fps
Bitrate: 2-5 Mbps for 1080p, 1-2 Mbps for 720p
Codec: VP9
Container: WebM
Duration: 30-60 seconds per project
```

### **Fallback Format: MP4 (H.264)**
```
Resolution: 1920x1080 (1080p) or 1280x720 (720p)
Frame Rate: 24-30 fps
Bitrate: 3-6 Mbps for 1080p, 1.5-3 Mbps for 720p
Codec: H.264
Container: MP4
Duration: 30-60 seconds per project
```

## 🛠️ **Video Optimization Tools**

### **1. FFmpeg (Command Line)**
```bash
# Convert to WebM (VP9) - Best compression
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k output.webm

# Convert to MP4 (H.264) - Universal compatibility
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# Create poster image
ffmpeg -i input.mp4 -ss 00:00:05 -vframes 1 poster.jpg
```

### **2. HandBrake (GUI)**
- Download: https://handbrake.fr/
- Use "Web" preset for optimal web delivery
- Enable "Web Optimized" option

### **3. Online Tools**
- **CloudConvert**: https://cloudconvert.com/
- **Convertio**: https://convertio.co/
- **Online Video Converter**: https://www.onlinevideoconverter.com/

## 📁 **File Structure**
```
public/
├── videos/
│   ├── ecommerce-demo.webm
│   ├── ecommerce-demo.mp4
│   ├── fitness-app-demo.webm
│   ├── fitness-app-demo.mp4
│   └── ...
└── images/
    ├── ecommerce-poster.jpg
    ├── fitness-poster.jpg
    └── ...
```

## 🎬 **Video Content Best Practices**

### **Content Guidelines**
1. **Keep it Short**: 30-60 seconds per project
2. **Start Strong**: Show the most impressive feature first
3. **Clear Navigation**: Demonstrate key user flows
4. **High Quality**: Use screen recording software (OBS, Loom, etc.)
5. **Add Subtitles**: Include captions for accessibility

### **Recording Tips**
- Use 1080p or 720p resolution
- Record at 30fps for smooth playback
- Use a good microphone for voice-over
- Keep background music subtle
- Test on different devices

## ⚡ **Performance Optimization**

### **Lazy Loading**
The VideoPlayer component includes:
- `preload="metadata"` - Only loads video metadata initially
- Poster images for immediate visual feedback
- Progressive loading for better performance

### **CDN Recommendations**
- **Cloudflare**: Free tier with video optimization
- **AWS CloudFront**: Enterprise-grade CDN
- **Vimeo**: Professional video hosting
- **YouTube**: Embed with privacy settings

### **File Size Targets**
```
WebM (VP9): 2-5 MB for 30-second videos
MP4 (H.264): 3-8 MB for 30-second videos
Poster Images: 100-300 KB (JPEG, WebP)
```

## 🔧 **Implementation Example**

### **Adding a New Project Video**
1. **Optimize your video** using the tools above
2. **Place files** in the correct directories
3. **Update the projects array** in `app/portfolio/page.tsx`:

```typescript
{
  id: 7,
  title: "Your New Project",
  description: "Description of your project",
  category: "web",
  technologies: ["React", "Node.js", "MongoDB"],
  video: {
    webm: "/videos/your-project-demo.webm",
    mp4: "/videos/your-project-demo.mp4",
    poster: "/images/your-project-poster.jpg"
  },
  features: ["Feature 1", "Feature 2", "Feature 3"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourusername/your-project"
}
```

## 📊 **Browser Support**

### **WebM Support**
- ✅ Chrome 23+
- ✅ Firefox 28+
- ✅ Edge 79+
- ❌ Safari (uses MP4 fallback)

### **MP4 Support**
- ✅ All modern browsers
- ✅ Mobile devices
- ✅ Legacy browsers

## 🎨 **Video Player Features**

The custom VideoPlayer component includes:
- **Dual format support** (WebM + MP4 fallback)
- **Custom controls** with play/pause, volume, fullscreen
- **Progress bar** with seeking capability
- **Loading states** and error handling
- **Responsive design** for all screen sizes
- **Accessibility features** (keyboard navigation, ARIA labels)

## 🚀 **Quick Start Commands**

```bash
# Install FFmpeg (macOS)
brew install ffmpeg

# Convert a video to WebM
ffmpeg -i your-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm

# Convert to MP4
ffmpeg -i your-video.mp4 -c:v libx264 -crf 23 output.mp4

# Create poster image
ffmpeg -i your-video.mp4 -ss 00:00:05 -vframes 1 poster.jpg
```

## 📈 **Analytics & Monitoring**

Consider adding:
- **Video analytics** (plays, completion rates)
- **Performance monitoring** (load times, buffering)
- **User engagement** metrics
- **A/B testing** for different video formats

## 🔒 **Security Considerations**

- **Host videos** on your own domain or trusted CDN
- **Use HTTPS** for all video URLs
- **Implement CORS** headers if needed
- **Consider watermarking** for sensitive content
- **Backup original files** before optimization

---

**Remember**: The key to great portfolio videos is quality content + optimized delivery. Focus on showcasing your best work with clear, engaging demonstrations that load quickly and play smoothly across all devices. 
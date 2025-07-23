// Image array with all the photos
const images = [
    'images/IMG-20230630-WA0007.jpg',
    'images/IMG-20240205-WA0046~3.jpg',
    'images/IMG-20240314-WA0006.jpg',
    'images/IMG-20250517-WA0016.jpg',
    'images/IMG_0034.JPG',
    'images/IMG_0121.HEIC',
    'images/IMG_0328.HEIC',
    'images/IMG_0330.HEIC',
    'images/IMG_20220405_120237_102.jpg',
    'images/IMG_20230312_112416277.jpg',
    'images/IMG_20230312_134650251.jpg',
    'images/IMG_20230312_163311714.jpg',
    'images/IMG_20230501_211123683.jpg',
    'images/IMG_20230502_165742511.jpg',
    'images/IMG_20230724_182609953.jpg',
    'images/IMG_20240318_202846993.jpg',
    'images/IMG_20240319_182420905.jpg',
    'images/IMG_20240319_201745501.jpg',
    'images/IMG_20240320_151524326.jpg',
    'images/IMG_20240320_151808828.jpg',
    'images/IMG_20241122_203510122~2.jpg',
    'images/IMG_20250214_094916317~2.jpg',
    'images/PHOTO-2025-05-25-00-16-40.jpg',
    'images/PXL_20240320_151905044.jpg',
    'images/Picsart_22-10-17_05-53-10-160.jpg',
    'images/Screenshot_20230301-232556.png',
    'images/Screenshot_20230714-094140.png',
    'images/Screenshot_20230724-002257.png',
    'images/Screenshot_20230814-124428.png',
    'images/Screenshot_20240304-075537.png',
    'images/2ndlast.jpg',
    'images/last.jpg'
];

let currentPage = 0; // 0 = cover, 1+ = image pages
let currentSection = 'cake';
let diaryOpened = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    showSection('cake-section');
    setupSurpriseButton();
    createBackgroundEffects();
    generateDiaryPages();
});

// Show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Create dynamic background effects
function createBackgroundEffects() {
    // Floating hearts
    setInterval(() => {
        if (Math.random() > 0.7) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.fontSize = (1 + Math.random()) + 'rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1';
            heart.style.opacity = '0.4';
            heart.style.transition = 'all 4s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = '-10vh';
                heart.style.opacity = '0';
                heart.style.transform = `rotate(${Math.random() * 360}deg) scale(0.5)`;
            }, 100);
            
            setTimeout(() => {
                if (document.body.contains(heart)) {
                    document.body.removeChild(heart);
                }
            }, 4000);
        }
    }, 1500);

    // Sparkle effect on mouse move
    document.addEventListener('mousemove', function(event) {
        if (Math.random() > 0.96) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = event.clientX + 'px';
            sparkle.style.top = event.clientY + 'px';
            sparkle.style.fontSize = '1rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1';
            sparkle.style.opacity = '0.8';
            sparkle.style.transition = 'all 1s ease-out';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.style.opacity = '0';
                sparkle.style.transform = 'scale(2) rotate(180deg)';
            }, 100);
            
            setTimeout(() => {
                if (document.body.contains(sparkle)) {
                    document.body.removeChild(sparkle);
                }
            }, 1000);
        }
    });
}

// Setup surprise button with realistic cake explosion
function setupSurpriseButton() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const burstOverlay = document.getElementById('burstOverlay');
    const explosionContainer = document.getElementById('explosionContainer');
    
    surpriseBtn.addEventListener('click', function() {
        // Disable button and hide message immediately
        surpriseBtn.disabled = true;
        surpriseBtn.style.opacity = '0';
        document.querySelector('.birthday-message').style.opacity = '0';
        
        // Create realistic cake explosion
        createCakeExplosion();
        
        // Show burst message after explosion starts
        setTimeout(() => {
            const celebrationOverlay = document.getElementById('celebrationOverlay');
            celebrationOverlay.classList.add('active');
        }, 500);
        
        // Transition to split screen after explosion
        setTimeout(() => {
            showSection('split-section');
            currentSection = 'split';
        }, 4000);
    });
}

// Create realistic cake explosion animation
function createCakeExplosion() {
    const birthdayCake = document.getElementById('cake2d');
    const explosionContainer = document.getElementById('explosionContainer');
    
    // Hide original cake
    birthdayCake.style.opacity = '0';
    birthdayCake.style.transform = 'scale(0.1)';
    
    // Create cake pieces for explosion
    const pieces = [
        // Layer pieces
        { type: 'layer', color: '#8B4513', size: '60px' },
        { type: 'layer', color: '#D2691E', size: '50px' },
        { type: 'layer', color: '#FFB6C1', size: '45px' },
        { type: 'layer', color: '#FF69B4', size: '40px' },
        { type: 'layer', color: '#FF1493', size: '35px' },
        
        // Cream pieces
        { type: 'cream', color: '#FFFACD', size: '25px' },
        { type: 'cream', color: '#F0E68C', size: '20px' },
        { type: 'cream', color: '#FFFEF7', size: '30px' },
        
        // Cherry and decorations
        { type: 'cherry', color: '#DC143C', size: '15px' },
        { type: 'decoration', color: '#FFD700', size: '18px' },
        
        // Candle pieces
        { type: 'candle', color: '#FFA500', size: '12px' },
        { type: 'candle', color: '#FF8C00', size: '10px' },
        
        // Additional fragments
        { type: 'fragment', color: '#CD853F', size: '25px' },
        { type: 'fragment', color: '#DEB887', size: '20px' },
        { type: 'fragment', color: '#F4A460', size: '30px' }
    ];
    
    pieces.forEach((piece, index) => {
        setTimeout(() => {
            const pieceElement = document.createElement('div');
            pieceElement.className = 'cake-piece';
            
            // Style the piece
            pieceElement.style.width = piece.size;
            pieceElement.style.height = piece.size;
            pieceElement.style.background = piece.color;
            pieceElement.style.position = 'absolute';
            pieceElement.style.left = '50%';
            pieceElement.style.top = '50%';
            pieceElement.style.transform = 'translate(-50%, -50%)';
            
            // Different shapes based on type
            if (piece.type === 'layer') {
                pieceElement.style.borderRadius = '8px';
                pieceElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            } else if (piece.type === 'cream') {
                pieceElement.style.borderRadius = '50%';
                pieceElement.style.boxShadow = '0 3px 10px rgba(255,255,255,0.5)';
            } else if (piece.type === 'cherry') {
                pieceElement.style.borderRadius = '50%';
                pieceElement.style.boxShadow = '0 2px 8px rgba(220,20,60,0.6)';
            } else if (piece.type === 'candle') {
                pieceElement.style.borderRadius = '3px';
                pieceElement.style.height = '20px';
                pieceElement.style.width = '6px';
            } else {
                pieceElement.style.borderRadius = '4px';
                pieceElement.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }
            
            // Calculate random explosion direction
            const angle = (Math.random() * 360) * Math.PI / 180;
            const distance = 300 + Math.random() * 400;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance - Math.random() * 200; // Slight upward bias
            const rotation = Math.random() * 720 - 360;
            
            // Set CSS custom properties for animation
            pieceElement.style.setProperty('--dx', dx + 'px');
            pieceElement.style.setProperty('--dy', dy + 'px');
            pieceElement.style.setProperty('--rotation', rotation + 'deg');
            
            explosionContainer.appendChild(pieceElement);
            
            // Clean up after animation
            setTimeout(() => {
                if (explosionContainer.contains(pieceElement)) {
                    explosionContainer.removeChild(pieceElement);
                }
            }, 2000);
        }, index * 50); // Stagger the explosion
    });
    
    // Create explosion flash effect
    const flash = document.createElement('div');
    flash.style.position = 'absolute';
    flash.style.top = '50%';
    flash.style.left = '50%';
    flash.style.width = '200px';
    flash.style.height = '200px';
    flash.style.background = 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,215,0,0.7), transparent)';
    flash.style.borderRadius = '50%';
    flash.style.transform = 'translate(-50%, -50%) scale(0)';
    flash.style.transition = 'transform 0.3s ease-out, opacity 0.5s ease-out';
    flash.style.opacity = '1';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '25';
    
    explosionContainer.appendChild(flash);
    
    setTimeout(() => {
        flash.style.transform = 'translate(-50%, -50%) scale(3)';
        flash.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
        if (explosionContainer.contains(flash)) {
            explosionContainer.removeChild(flash);
        }
    }, 800);
}

// Generate memory book pages with beautiful new design
function generateDiaryPages() {
    const pagesContainer = document.getElementById('pagesContainer');
    
    // Ensure 2ndlast.jpg is second to last and last.jpg is last
    let sortedImages = [...images];
    sortedImages = sortedImages.filter(img => img !== 'images/2ndlast.jpg' && img !== 'images/last.jpg');
    sortedImages.push('images/2ndlast.jpg');
    sortedImages.push('images/last.jpg');
    
    sortedImages.forEach((imagePath, index) => {
        const page = document.createElement('div');
        page.className = 'memory-page';
        page.style.zIndex = sortedImages.length - index;
        
        const img = document.createElement('img');
        img.className = 'memory-image';
        img.src = imagePath;
        img.alt = 'Beautiful Memory';
        img.loading = 'lazy';
        
        page.appendChild(img);
        
        // Add special captions for the last two images
        if (imagePath === 'images/2ndlast.jpg') {
            const caption = document.createElement('div');
            caption.className = 'memory-caption';
            caption.textContent = 'Happy Birthday Choti Tammu ❤️';
            page.appendChild(caption);
        } else if (imagePath === 'images/last.jpg') {
            const caption = document.createElement('div');
            caption.className = 'memory-caption';
            caption.textContent = 'Meri Pyaari Tammu 💕';
            page.appendChild(caption);
        }
        
        pagesContainer.appendChild(page);
    });
    
    // Update global images array
    images.length = 0;
    images.push(...sortedImages);
    
    // Update total pages display
    const totalPagesElement = document.getElementById('totalPagesNum');
    if (totalPagesElement) {
        totalPagesElement.textContent = sortedImages.length;
    }
}

// Show memories section
function showMemories() {
    showSection('memories-section');
    currentSection = 'memories';
    currentPage = 0;
    updateDiaryDisplay();
}

// Show messages section
function showMessages() {
    showSection('messages-section');
    currentSection = 'messages';
}

// Update memory book display with beautiful animations
function updateDiaryDisplay() {
    const bookCover = document.getElementById('bookCoverWrapper');
    const memoryPages = document.querySelectorAll('.memory-page');
    const currentPageElement = document.getElementById('currentPageNum');
    const prevBtn = document.getElementById('memoryPrevBtn');
    const nextBtn = document.getElementById('memoryNextBtn');
    
    if (currentPage === 0) {
        // Show cover
        currentPageElement.textContent = 'Cover';
        bookCover.style.transform = 'rotateY(0deg)';
        
        // Hide all pages
        memoryPages.forEach((page, index) => {
            page.style.transform = 'rotateY(0deg)';
            page.style.display = 'none';
            page.style.opacity = '0';
        });
        
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    } else {
        // Show specific page
        const pageIndex = currentPage - 1;
        currentPageElement.textContent = currentPage;
        
        // Open cover with smooth animation
        bookCover.style.transform = 'rotateY(-180deg)';
        
        // Manage page visibility and animations
        memoryPages.forEach((page, index) => {
            if (index === pageIndex) {
                // Current page - visible and centered
                page.style.display = 'flex';
                page.style.opacity = '1';
                page.style.transform = 'rotateY(0deg) translateZ(0px)';
                page.style.zIndex = '20';
            } else if (index < pageIndex) {
                // Previous pages - stacked on left
                page.style.display = 'flex';
                page.style.opacity = '0.8';
                page.style.transform = 'rotateY(-180deg) translateZ(-2px)';
                page.style.zIndex = '10';
            } else {
                // Future pages - hidden
                page.style.display = 'none';
                page.style.opacity = '0';
                page.style.transform = 'rotateY(0deg) translateZ(-5px)';
                page.style.zIndex = '5';
            }
        });
        
        prevBtn.disabled = false;
        nextBtn.disabled = currentPage >= images.length;
    }
}

// Previous memory page function
function previousMemoryPage() {
    if (currentPage > 0) {
        currentPage--;
        // Add page flip visual effect
        playMemoryPageFlip();
        updateDiaryDisplay();
    }
}

// Next memory page function  
function nextMemoryPage() {
    if (currentPage < images.length) {
        currentPage++;
        // Add page flip visual effect
        playMemoryPageFlip();
        updateDiaryDisplay();
    }
}

// Keep old function names for backward compatibility
function previousPage() {
    previousMemoryPage();
}

function nextPage() {
    nextMemoryPage();
}

// Enhanced visual feedback for memory page flips
function playMemoryPageFlip() {
    const memoryBook = document.getElementById('memoryBook');
    
    // Create subtle book movement animation with slower timing
    memoryBook.style.transition = 'transform 0.6s ease-out, filter 0.6s ease-out';
    memoryBook.style.transform = 'rotateX(-12deg) rotateY(-15deg) scale(1.03)';
    memoryBook.style.filter = 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))';
    
    setTimeout(() => {
        memoryBook.style.transform = 'rotateX(-8deg) rotateY(-12deg) scale(1)';
        memoryBook.style.filter = 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))';
    }, 600);
    
    // Reset transition after animation
    setTimeout(() => {
        memoryBook.style.transition = '';
    }, 1200);
}

// Legacy function for backward compatibility
function playPageFlipSound() {
    playMemoryPageFlip();
}

// Go back function
function goBack(targetSection) {
    if (targetSection === 'cake') {
        showSection('cake-section');
        currentSection = 'cake';
        // Reset cake section
        const cakeContainer = document.getElementById('cakeContainer');
        const birthdayCake = document.getElementById('cake2d');
        const celebrationOverlay = document.getElementById('celebrationOverlay');
        const explosionContainer = document.getElementById('explosionContainer');
        
        // Reset cake
        birthdayCake.style.opacity = '1';
        birthdayCake.style.transform = 'scale(1)';
        
        // Clear explosion and celebration
        explosionContainer.innerHTML = '';
        celebrationOverlay.classList.remove('active');
        
        // Re-enable button and message
        const surpriseBtn = document.getElementById('surpriseBtn');
        surpriseBtn.disabled = false;
        surpriseBtn.style.opacity = '1';
        document.querySelector('.birthday-message').style.opacity = '1';
        
    } else if (targetSection === 'split') {
        showSection('split-section');
        currentSection = 'split';
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (currentSection === 'memories') {
        if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
            previousPage();
        } else if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
            nextPage();
        }
    }
    
    if (event.key === 'Escape') {
        if (currentSection === 'memories' || currentSection === 'messages') {
            goBack('split');
        } else if (currentSection === 'split') {
            goBack('cake');
        }
    }
    
    // Space bar to trigger surprise
    if (event.key === ' ' && currentSection === 'cake') {
        event.preventDefault();
        const surpriseBtn = document.getElementById('surpriseBtn');
        if (!surpriseBtn.disabled) {
            surpriseBtn.click();
        }
    }
});

// Touch/swipe support for mobile
let startX = null;
let startY = null;

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    if (startX === null || startY === null) return;
    
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;
    
    // Only process horizontal swipes if they're stronger than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (currentSection === 'memories') {
            if (diffX > 0) {
                nextPage(); // Swipe left = next page
            } else {
                previousPage(); // Swipe right = previous page
            }
        }
    }
    
    startX = null;
    startY = null;
});

// Preload images for smooth experience
function preloadImages() {
    images.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
    });
}

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add enhanced hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!button.disabled) {
                this.style.filter = 'brightness(1.1) saturate(1.2)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
    
    // Add click ripple effect
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (button.disabled) return;
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Start preloading images
preloadImages();

// ===== AUDIO FUNCTIONALITY FOR URVASHI SONG =====
let isPlaying = false;
let audioTimeout = null;

function playUrvashiSong() {
    const audio = document.getElementById('urvashiAudio');
    const playBtn = document.getElementById('playSongBtn');
    const visualizer = document.getElementById('musicVisualizer');
    
    if (!audio) {
        console.error('Audio element not found');
        return;
    }
    
    if (isPlaying) {
        // Stop the song
        stopUrvashiSong();
        return;
    }
    
    // Start playing from 1:23 (83 seconds)
    audio.currentTime = 83;
    
    // Play the audio
    audio.play().then(() => {
        isPlaying = true;
        
        // Update button appearance
        playBtn.classList.add('playing');
        playBtn.innerHTML = `
            <span class="play-icon">⏸️</span>
            <span class="song-text">Playing... URVASHI URVASHI!</span>
            <span class="play-icon">🎵</span>
        `;
        
        // Show visualizer
        visualizer.classList.add('active');
        
        // Stop after 30 seconds
        audioTimeout = setTimeout(() => {
            stopUrvashiSong();
        }, 30000);
        
    }).catch(error => {
        console.error('Failed to play audio:', error);
        alert('Sorry, unable to play the song. Please check if the audio file exists.');
    });
}

function stopUrvashiSong() {
    const audio = document.getElementById('urvashiAudio');
    const playBtn = document.getElementById('playSongBtn');
    const visualizer = document.getElementById('musicVisualizer');
    
    if (audio) {
        audio.pause();
        audio.currentTime = 83; // Reset to start position
    }
    
    isPlaying = false;
    
    // Clear timeout if exists
    if (audioTimeout) {
        clearTimeout(audioTimeout);
        audioTimeout = null;
    }
    
    // Reset button appearance
    if (playBtn) {
        playBtn.classList.remove('playing');
        playBtn.innerHTML = `
            <span class="play-icon">🎵</span>
            <span class="song-text">URVASHI URVASHI TAKE IT EASY URVASHIIIII!!!</span>
            <span class="play-icon">🎵</span>
        `;
    }
    
    // Hide visualizer
    if (visualizer) {
        visualizer.classList.remove('active');
    }
}

// Handle audio end event
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('urvashiAudio');
    if (audio) {
        audio.addEventListener('ended', stopUrvashiSong);
        audio.addEventListener('error', function(e) {
            console.error('Audio error:', e);
            stopUrvashiSong();
        });
    }
});
// Utility: Show only one section at a time (for deck navigation)
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
  // Scroll to top for better UX
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Challenge 1 & 5: Gen Z AI Tutor Features (Persona, Modes, Gamification)
let currentXP = 150;
let currentStreak = 3;

function updateGamification() {
  const xpEl = document.getElementById('xp');
  const streakEl = document.getElementById('streak');
  if (xpEl) xpEl.textContent = currentXP;
  if (streakEl) streakEl.textContent = `${currentStreak} days`;
  // Animate XP bar if on dashboard
  const fill = document.querySelector('.xp-bar .fill');
  if (fill) fill.style.width = `${(currentXP % 100)}%`; // Mock progress
}

// Challenge 5: Level Up Microinteraction
function levelUp() {
  currentXP += 50;
  updateGamification();
  // Simple animation: Shake or glow
  const bar = document.querySelector('.progress-bar');
  if (bar) {
    bar.style.transform = 'scale(1.05)';
    setTimeout(() => bar.style.transform = 'scale(1)', 200);
  }
  alert('Level Up! 🎉 Unlocked: New Avatar Skin');
}

// Challenge 2: User Journey Optimization
let journeyStep = 1;
function advanceJourney(step) {
  journeyStep = step;
  document.querySelectorAll('.journey-flow .step').forEach((stepEl, idx) => {
    stepEl.classList.toggle('active', idx < step);
  });
  if (step >= 3) {
    const firstWow = document.getElementById('firstWow');
    if (firstWow) firstWow.classList.remove('hidden');
    // Mock first wow: Add XP
    currentXP += 50;
    updateGamification();
  }
  if (step === 4) {
    // Simulate returning session memory
    const lastStepP = document.querySelector('.journey-flow .step:last-child p');
    if (lastStepP) {
      lastStepP.innerHTML += '<br><em>AI: "Hey, yesterday\'s math? Let\'s crush it today!" 💙</em>';
    }
  }
}

function setupCompanion() {
  const goalSelect = document.getElementById('goalSelect');
  const goal = goalSelect ? goalSelect.value : 'Ace Math';
  alert(`Companion Setup: Your ${goal} Buddy is ready! Vibe: Chill. First session starting...`);
  advanceJourney(3); // Auto-advance to wow
}

// Challenge 3: Instant Hooks & Viral Features
// Homepage Demo (Challenge 5)
function generateDemo() {
  const quickQuery = document.getElementById('quickQuery');
  const query = quickQuery ? quickQuery.value || 'Explain quantum physics in memes' : 'Explain quantum physics in memes';
  const vortex = document.getElementById('loadingVortex');
  const output = document.getElementById('demoOutput');
  const outputText = document.getElementById('outputText');

  if (vortex) vortex.classList.remove('hidden');
  if (output) output.classList.add('hidden');

  setTimeout(() => {
    if (vortex) vortex.classList.add('hidden');
    if (outputText) {
      outputText.innerHTML = `Yo's Take: ${query} = Schrödinger's cat is both alive & dead until you check (like your unread DMs 😂). Want a meme? Here's one: [Mock Meme Image]. XP +20!`;
    }
    if (output) output.classList.remove('hidden');
    currentXP += 20;
    updateGamification();
  }, 1500); // 1.5s "AI thinking" for wow
}

// AI Selfie Buddy (Mock: Simple grayscale filter + overlay for "AI style")
function generateSelfieBuddy() {
  const input = document.getElementById('selfieInput');
  const canvas = document.getElementById('selfieCanvas');
  const output = document.getElementById('buddyOutput');
  if (!input || !canvas || !output) return;

  if (input.files && input.files[0]) {
    const img = new Image();
    const ctx = canvas.getContext('2d');
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // Mock AI: Grayscale + cyan overlay for "buddy vibe"
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const avg = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
        imageData.data[i] = avg;     // Red
        imageData.data[i+1] = avg;   // Green
        imageData.data[i+2] = avg * 1.5; // Blue tint for cyan
      }
      ctx.putImageData(imageData, 0, 0);
      // Add "AI Buddy" text overlay
      ctx.fillStyle = '#4af8ff';
      ctx.font = '30px Segoe UI';
      ctx.fillText('Your AI Buddy!', 20, 50);
      output.src = canvas.toDataURL();
      output.classList.remove('hidden');
      alert('Wow! Your AI Buddy matches your style. Emotional connect unlocked! 📸');
      currentXP += 30;
      updateGamification();
    };
    img.src = URL.createObjectURL(input.files[0]);
  }
}

// AI Study Playlist (Mock generation)
function generatePlaylist() {
  const playlistInput = document.getElementById('playlistInput');
  const mood = playlistInput ? playlistInput.value || 'Chill math' : 'Chill math';
  const output = document.getElementById('playlistOutput');
  if (!output) return;
  output.innerHTML = `
    <li>🎵 Lo-fi Beats for ${mood} - Chillhop</li>
    <li>🎵 Focus Flow - Spotify Study Mix</li>
    <li>🎵 Brain Waves - Ambient Math Vibes</li>
    <p>Play now? Integrates with Spotify API in real app.</p>
  `;
  output.classList.remove('hidden');
}

// 1-Click Knowledge Reels (Mock: Simple text "video" player)
function generateReel() {
  const reelInput = document.getElementById('reelInput');
  const topic = reelInput ? reelInput.value || 'Python loops' : 'Python loops';
  const output = document.getElementById('reelOutput');
  if (!output) return;
  output.innerHTML = `
    <div style="background: #000; border-radius: 12px; padding: 1rem; text-align: center;">
      <video controls width="100%" style="border-radius: 8px;">
        <source src="" type="video/mp4"> (Mock TikTok Reel: 15s animation)
      </video>
      <p>⚡ Quick Reel: ${topic} = Like a for-loop DJ spinning tracks endlessly! 🌀 #LearnWithYo</p>
      <button class="share-btn" onclick="simulateShare('reel')">Share Reel to TikTok</button>
    </div>
  `;
  output.classList.remove('hidden');
  currentXP += 25;
  updateGamification();
}

// Viral Loops
function simulateShare(type) {
  const messages = {
    demo: 'Check this AI answer from YoLearn! Mind blown 🚀',
    selfie: 'My AI Buddy looks just like me! Join YoLearn.ai 🎉',
    flashcard: 'AI-made flashcards for quantum – sharing on WhatsApp!',
    results: 'My study results from Yo – beat my score? 🏆',
    badge: 'Top Contributor Badge unlocked! #YoLearn',
    reel: 'Quick reel on Python – viral learning! 📱'
  };
  alert(`${messages[type] || 'Sharing...'} (Mock: Opens WhatsApp/Discord share sheet)`);
  currentXP += 10; // Reward sharing
  updateGamification();
}

function startChallenge() {
  alert('Challenge Started: "Who solves Python quiz fastest?" Invite friends via Discord. Leaderboard updates live!');
  // Mock: Show leaderboard in network section
  const leaderboard = document.getElementById('leaderboard');
  if (leaderboard) leaderboard.classList.remove('hidden');
}

function referFriend() {
  alert('Referral Sent! Invite 1 more friend to unlock Premium Avatar (e.g., Cyber Yo Skin). Visual tree updates in Dashboard.');
  currentStreak += 1;
  updateGamification();
}

// Challenge 4: Learning Companions Expansion
function adoptCompanion(type) {
  const names = { coding: 'CodeMaster Yo', creativity: 'ArtVibe Yo', mental: 'ZenCoach Yo' };
  alert(`Adopted: ${names[type]}! Tap in dashboard to chat. Emotional buddy activated 💙`);
  // Mock: Add to dashboard (in real app, dynamic)
  currentXP += 40;
  updateGamification();
}

// Challenge 6: Network Effects & Repeat Usage
function simulateLogin(provider) {
  alert(`Logged in with ${provider}! Skipping email – straight to dashboard. Welcome back!`);
  showSection('dashboard');
}

function nudgeInvite() {
  alert('Nudge: Invite 2 friends now to unlock AI Meme Mode (Generate study memes)! 🎁');
  // Mock referral tree growth
  const tree = document.querySelector('.referral-tree .branch');
  if (tree && tree.children.length < 4) {
    const newNode = document.createElement('div');
    newNode.className = 'node friend';
    newNode.textContent = `New Friend (+Meme Unlock)`;
    tree.appendChild(newNode);
  }
}

function joinSquad() {
  alert('Squad Created: Invite 3-5 friends for shared quizzes & AI leaderboards. Like Discord study groups!');
  const leaderboard = document.getElementById('leaderboard');
  if (leaderboard) leaderboard.classList.remove('hidden');
  currentXP += 60; // Group bonus
  updateGamification();
}

// Funnel Strategy: Auto-highlight stages (for demo)
function highlightFunnel(stage) {
  document.querySelectorAll('.funnel-stage').forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.funnel-stage.${stage}`);
  if (target) target.classList.add('active');
}

// Repeat Hooks: Daily Mission (Mock) - Init on Load
document.addEventListener('DOMContentLoaded', () => {
  // Init gamification
  updateGamification();
  // Simulate daily nudge on load
  setTimeout(() => {
    if (confirm('Daily Mission: Learn 5 concepts? Complete for +50 XP!')) {
      currentXP += 50;
      updateGamification();
      alert('Mission Complete! Streak extended 🔥');
    }
  }, 2000);
  // Emotional companion memory (on dashboard visit)
  const dashboard = document.getElementById('dashboard');
  if (dashboard && dashboard.classList.contains('active')) {
    setTimeout(() => {
      const mascot = document.getElementById('mascot');
      if (mascot) mascot.innerHTML += '<br>Yo recalls: Yesterday\'s code session? Let\'s build on it! 💙';
    }, 1000);
  }
  // Auto-highlight first funnel stage
  highlightFunnel('attract');
  // Funnel Strategy Functions (Special Focus)
let currentFunnelStage = 'attract'; // Track active stage

function startFunnelStage(stage) {
    // Hide all outputs first
    document.querySelectorAll('.funnel-output, .wow-card').forEach(el => el.classList.add('hidden'));
    
    // Show loading if needed
    if (stage === 'attract') {
        showLoadingVortex();
        setTimeout(() => {
            hideLoadingVortex();
            document.getElementById('attract-demo').classList.remove('hidden');
            updateXP(20);
            alert('Attract Demo: Instant hook activated! Jumped to homepage vibe.');
        }, 1500);
    } else if (stage === 'engage') {
        advanceJourney(3); // Auto-advance to wow step
        document.getElementById('engage-wow').classList.remove('hidden');
        updateXP(50);
        alert('Engage: Avatar set + first wow! Emotional connect unlocked.');
        showSection('onboarding'); // Auto-jump for flow
    } else if (stage === 'retain') {
        showNudge();
        document.getElementById('retain-nudge').classList.remove('hidden');
        updateStreak(1); // Increment streak
        alert('Retain Nudge: Yo missed you 💙 Daily mission ready!');
        showSection('dashboard'); // Auto-jump
    } else if (stage === 'share') {
        simulateShare('funnel');
        document.getElementById('share-loop').classList.remove('hidden');
        // Simulate tree growth
        const branch = document.querySelector('.mini .branch');
        if (branch.children.length < 3) {
            const newNode = document.createElement('div');
            newNode.className = 'node friend';
            newNode.textContent = 'New Referral';
            branch.appendChild(newNode);
        }
        updateXP(10);
        alert('Share Loop: Viral invite sent! Squad +1, tree grows.');
        showSection('network'); // Auto-jump
    }
    
    // Highlight active stage
    document.querySelectorAll('.funnel-stage').forEach(el => el.classList.remove('active'));
    document.getElementById(`funnel-${stage}`).classList.add('active');
    currentFunnelStage = stage;
}

// Emotional Nudge Simulation (for Retain)
function showNudge() {
    // Mock emotional message (could integrate with mascot)
    const mascot = document.getElementById('mascot');
    if (mascot) {
        mascot.innerHTML = 'Yo: "Missed you today 💙 Let\'s crush that streak!" <i class="fas fa-heart"></i>';
        mascot.classList.add('level-up-active'); // Animate if CSS has it
        setTimeout(() => {
            mascot.innerHTML = 'Yo: "What\'s up? Let\'s learn!" <i class="fas fa-robot"></i>';
            mascot.classList.remove('level-up-active');
        }, 3000);
    }
}

// Enhanced simulateShare (Update your existing function to include funnel)
function simulateShare(type) {
    let message = '';
    switch(type) {
        case 'demo': message = 'Check this YoLearn answer! 🚀'; break;
        case 'selfie': message = 'My AI Buddy is fire! Join YoLearn 💙'; break;
        case 'results': message = 'Beat my score? Squad up on YoLearn!'; break;
        case 'badge': message = 'Unlocked Meme Master badge! #YoLearn'; break;
        case 'funnel': message = 'Loving this learning vibe—share the funnel!'; break;
        default: message = 'Share YoLearn wow! 📱';
    }
    alert(`Shared "${message}" on WhatsApp/Insta! +10 XP (Viral loop activated)`);
    updateXP(10);
    // Optional: Grow referral tree globally
    const treeBranch = document.querySelector('.referral-tree .branch');
    if (treeBranch && treeBranch.children.length < 5) {
        const newNode = document.createElement('div');
        newNode.className = 'node friend';
        newNode.textContent = `Friend from ${type}`;
        treeBranch.appendChild(newNode);
    }
}

// If not already in your JS, add global XP/Streak updates (enhance existing)
function updateXP(amount) {
    let currentXP = parseInt(document.getElementById('xp').textContent) || 0;
    currentXP += amount;
    document.getElementById('xp').textContent = currentXP;
    // Animate XP bar if in dashboard
    const fill = document.querySelector('.xp-bar .fill');
    if (fill) {
        const progress = Math.min((currentXP % 1000) / 10, 100); // Mock level progress
        fill.style.width = progress + '%';
    }
    console.log(`XP Updated: +${amount} (Total: ${currentXP})`);
}

function updateStreak(days) {
    let currentStreak = parseInt(document.getElementById('streak').textContent) || 0;
    currentStreak += days;
    document.getElementById('streak').textContent = currentStreak + ' days';
    alert(`Streak Extended: ${currentStreak} days 🔥`);
}
});
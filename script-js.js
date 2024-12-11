// Page Content Object
var pageContent = {
    home: `
    <div class="home">
        <h1>Welcome to Hostel Management</h1>
        <div class="home-features">
            <div class="feature-card">
                <h2>Room Allocation</h2>
                <p>Efficient room management system for students and faculty.</p>
            </div>
            <div class="feature-card">
                <h2>Facility Management</h2>
                <p>Comprehensive management of hostel facilities and resources.</p>
            </div>
            <div class="feature-card">
                <h2>Communication</h2>
                <p>Easy communication through noticeboard and feedback systems.</p>
            </div>
        </div>
        </div>
    `,
    room: `
    <div class="room">
        <h1> Room Management</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Room Name</th>
                    <th>Total Capacity</th>
                    <th>Occupied Rooms</th>
                    <th>Available Rooms</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Block A</td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td> Block B</td>
                    <td>12</td>
                    <td>9</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
        </div>
    `,
    noticeboard: `<dev class="notice">
        <h1>Noticeboard</h1>
        <div class="notice-card">
            <h2>Exam Schedule</h2>
            <p>Date: 2024-01-15</p>
            <p>Semester end exam schedule will be announced soon.</p>
        </div>
        <div class="notice-card">
            <h2>Hostel Maintenance</h2>
            <p>Date: 2024-01-10</p>
            <p>Scheduled maintenance for hostel blocks next week.</p>
        </div>
        </div>
    `,
    about: `<div class="about">
        <h1>About Us</h1>
        <div class="form-container">
            <p>Our hostel management system is designed to provide efficient and comfortable living spaces for students and faculty. We prioritize safety, convenience, and a supportive environment.</p>
            <p>With state-of-the-art facilities and dedicated management, we ensure a seamless experience for all residents.</p>
        </div>
        </div>
    `,
    gallery: `
        <h1>Gallery</h1>
        <div class="gallery">
            <div class="gallery-item">
                <img src="/asset/BOYS-1.jpg" alt="Hostel Exterior">
                <p>Hostel Exterior</p>
            </div>
            <div class="gallery-item">
                <img src="/asset/ROOM-1.jpg" alt=" Room">
                <p>Room</p>
            </div>
            <div class="gallery-item">
                <img src="/asset/washroom-2-1.jpg" alt="Washroom">
                <p>Washroom</p>
            </div>
        </div>
    `,
    contact: `<div class="contact">
        <h1>Contact Us</h1>
        <div class="form-container">
            <form id="contact-form">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
        </div>
    `,
    feedback: `
    <div class ="feedback">
        <h1>Feedback</h1>
        <div class="form-container">
            <form id="feedback-form">
                <div class="form-group">
                    <label>Rating</label>
                    <select class="form-control">
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5" selected>5 Stars</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Comments</label>
                    <textarea class="form-control" rows="5" placeholder="Share your experience..."></textarea>
                </div>
                <button type="submit" class="btn">Submit Feedback</button>
            </form>
        </div>
        </div>
    `,
    login:`
    <div class="login-container">
        <div class="login-box">
            <h1>Login</h1>
            <form id="login-form">
                <div class="form-group">
                    <label for="user-id">ID</label>
                    <input type="text" id="user-id" name="user-id" class="form-control" placeholder="Enter your ID" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="Enter your password" required />
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>
    </div>
    `

};

// Function to load page content
function loadPage(page) {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pageContent[page];

    // Add event listeners for forms
    if (page === 'contact') {
        var contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully!');
            this.reset();
        });
    }

    if (page === 'feedback') {
        var feedbackForm = document.getElementById('feedback-form');
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Feedback submitted successfully!');
            this.reset();
        });
    }
  // login
  if (page === 'login') {
    var loginForm = document.getElementById('login-form'); // Use the correct form ID
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Login successful!'); // Updated message for login
        this.reset(); // Reset the form fields
    });
}

}

// Event delegation for navigation
document.querySelector('.navbar-menu').addEventListener('click', function(e) {
    if (e.target.matches('[data-page]')) {
        var page = e.target.getAttribute('data-page');
        loadPage(page);
    }
});

// Load home page by default
loadPage('home');

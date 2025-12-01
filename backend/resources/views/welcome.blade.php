<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ trans_json('footer.title') }} - Courier Service</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #667eea;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #667eea;
        }

        .lang-switcher {
            display: flex;
            gap: 0.5rem;
            background: #f0f0f0;
            padding: 0.5rem;
            border-radius: 25px;
        }

        .lang-btn {
            padding: 0.5rem 1rem;
            border: none;
            background: transparent;
            cursor: pointer;
            border-radius: 20px;
            font-weight: 600;
            transition: all 0.3s;
            text-decoration: none;
            color: #333;
        }

        .lang-btn.active {
            background: #667eea;
            color: white;
        }

        .lang-btn:hover:not(.active) {
            background: #e0e0e0;
        }

        .hero {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 2rem;
            text-align: center;
            color: white;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
            animation: fadeInUp 0.8s ease-out;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.95;
            animation: fadeInUp 1s ease-out;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1.2s ease-out;
        }

        .btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 30px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s;
            display: inline-block;
        }

        .btn-primary {
            background: white;
            color: #667eea;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .btn-secondary:hover {
            background: white;
            color: #667eea;
        }

        .features {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
            animation: fadeInUp 1.4s ease-out;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .feature-card h3 {
            color: #667eea;
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }

        .feature-card p {
            color: #666;
            line-height: 1.6;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .nav-links {
                gap: 1rem;
            }

            .features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">{{ trans_json('footer.title') }}</a>
            <ul class="nav-links">
                <li><a href="#services">{{ trans_json('headerMenu.about') }}</a></li>
                <li><a href="#tracking">{{ trans_json('headerMenu.course') }}</a></li>
                <li><a href="#contact">{{ trans_json('headerMenu.contact') }}</a></li>
                <li>
                    <div class="lang-switcher">
                        <a href="?lang=en" class="lang-btn {{ app()->getLocale() == 'en' ? 'active' : '' }}">English</a>
                        <a href="?lang=bn" class="lang-btn {{ app()->getLocale() == 'bn' ? 'active' : '' }}">বাংলা</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <h1>{{ trans_json('HomeHero.title') }}</h1>
        <p>{{ trans_json('HomeHero.subTitle') }}</p>
        <div class="cta-buttons">
            <a href="#ship" class="btn btn-primary">{{ trans_json('HomeHero.learningBtn') }}</a>
            <a href="#track" class="btn btn-secondary">{{ trans_json('HomeHero.tracktile') }}</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features">
        <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>{{ trans_json('services.title1') }}</h3>
            <p>{{ trans_json('services.subTitle1') }}</p>
        </div>

        <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>{{ trans_json('services.title2') }}</h3>
            <p>{{ trans_json('services.subTitle2') }}</p>
        </div>

        <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>{{ trans_json('services.title3') }}</h3>
            <p>{{ trans_json('services.subTitle3') }}</p>
        </div>

        <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>{{ trans_json('services.title4') }}</h3>
            <p>{{ trans_json('services.subTitle4') }}</p>
        </div>
    </section>

    <script>
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>

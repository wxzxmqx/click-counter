<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Click Counter</title>
</head>
<body>
    <?php include "includes/header.php"; ?>

    <main>
        <section id="timer">
            <h2 class="current-timer">5</h2> 
            <p>seconds</p>
        </section>

        <section id="click-section">
            <button class="click">Click</button>
        </section>

        <p class="note">Clicks are counted only while the timer is running</p>

        <section id="stats">
            <h2>Total Statistics</h2>
            <ul>
                <li>
                    <p>
                        Total Clicks
                    </p>
                    <span class="clicks">0</span>
                </li>

                <li>
                    <p>
                        Clicks Per Second (CPS)
                    </p>
                    <span class="cps">0</span>
                </li>

                <li>
                    <p>
                        Clicks Per Minute (CPM)
                    </p>
                    <span class="cpm">0</span>
                </li>
            </ul>
        </section>

        <section id="controls">
            <button class="start">Start Test</button>
            <button class="reset">Reset</button>
            <div class="durations">
                <button data-time="5" class="active">5s</button>
                <button data-time="10">10s</button>
                <button data-time="30">30s</button>
                <button data-time="60">60s</button>
            </div>

        </section>
    </main>

    <?php include "includes/footer.php"; ?>

    <script src="/assets/js/main.js"></script>
</body>
</html>
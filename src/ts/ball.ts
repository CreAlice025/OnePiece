const ball = document.getElementById("dragonBall") as HTMLImageElement

if (ball) {
    let x = 100
    let y = 100
    let vx = 8
    let vy = 12
    const ballSize = 64

    function moveBall() {
        const screenW = window.innerWidth
        const screenH = window.innerHeight

        x += vx
        y += vy

        if (x + ballSize >= screenW || x <= 0) vx *= -1
        if (y + ballSize >= screenH || y <= 0) vy *= -1

        ball.style.transform = `translate(${x}px, ${y}px)`
        requestAnimationFrame(moveBall)
    }

    requestAnimationFrame(moveBall)
}
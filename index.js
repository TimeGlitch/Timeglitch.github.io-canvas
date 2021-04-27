document.addEventListener("DOMContentLoaded", () =>
{

    //set up canvas and context
    const canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const context = canvas.getContext("2d")

    //handle inputs
    var down = up = left = right = false

    window.addEventListener("keydown", (event) =>{
        if(event.key == "ArrowDown")
        {
            down = true
        }
        
        if(event.key == "ArrowUp")
        {
            up = true
        }

        if(event.key == "ArrowRight")
        {
            right = true
        }

        if(event.key == "ArrowLeft")
        {
            left = true
        }

    })

    window.addEventListener("keyup", (event) =>{
        if(event.key == "ArrowDown")
        {
            down = false
        }
        if(event.key == "ArrowUp")
        {
            up = false
        }
        if(event.key == "ArrowRight")
        {
            right = false
        }
        if(event.key == "ArrowLeft")
        {
            left = false
        }
    })

    class Player
    {
        constructor()
        {
            this.x = this.y = 200
            this.size = 100
            this.color = "blue"
            this.speed = 20
        }

        update()
        {
            //move object
            if(up)
            {
               this.y = this.y - this.speed
            }
            if(down)
            {
               this.y = this.y  + this.speed
            }
            if(left)
            {
                this.x = this.x - this.speed
            }
            if(right)
            {
                this.x = this.x + this.speed
            }

            //draw
            context.fillStyle = this.color
            context.fillRect(this.x, this.y, this.size, this.size)


        }

    }

    player = new Player()
    
    function gameLoop()
    {
        context.clearRect(0, 0, canvas.width, canvas.height)
        player.update()
        requestAnimationFrame(gameLoop)
    }

    gameLoop()


})
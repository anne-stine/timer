// Timer --- Object Oriented Programming (OOP)


function Timer() 
{
    let startTime, endTime, running, duration = 0

    // Function for starting timer
    this.start = function() 
    {
        if (running)
            throw new Error("The timer has already started")
        running = true
        startTime = new Date()
    }

    // Function for stopping timer
    this.stop = function() 
    {
        if (!running)
            throw new Error("The timer has already stopped")
        running = false
        endTime = new Date()
        let seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    // Function for resetting timer
    this.reset = function() 
    {
        startTime = null
        endTime = null
        running = false
        duration = 0
    }

    // Returns duration
    Object.defineProperty(this, "duration",
    {
        get: function() 
        {
            return duration 
        }
    })
}

const timer = new Timer()
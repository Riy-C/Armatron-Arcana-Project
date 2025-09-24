class Position
{
    XPosition = 0.0;
    YPosition = 0.0;

    constructor(X, Y)
    {
        this.XPosition = X;
        this.YPosition = Y;

    }
}

class Card extends Position
{
    Width = 100; // default in pixels
    Height = 200; // default in pixels
    Position = new Position();

    constructor(width, height, position) 
    {
        this.Width = width;
        this.Height = height;
        this.Position = position;

    }

    Move(Position)
    {
        this.Position.X += Position.X;
        this.Position.Y += Position.Y;
    }
}


class Entity
{
	static sprite = new Image();

	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		
	
		Entity.sprite.src = 'assets/test.png';
	}

	update()
	{
		this.x++;

		if(this.x > 300)
		{
			this.x = 0;
		}
	}

	render(ctx)
	{
		ctx.drawImage(Entity.sprite, this.x, this.y);
	}
}
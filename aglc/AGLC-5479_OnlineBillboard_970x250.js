(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.Buttonflash = function() {
	this.initialize(img.Buttonflash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,235);


(lib.Buttonpressed = function() {
	this.initialize(img.Buttonpressed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,235);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,235);


(lib.footer = function() {
	this.initialize(img.footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,136);


(lib.tourneventlogo = function() {
	this.initialize(img.tourneventlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,170);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yourscore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBLQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgEIAAiJIABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIBLAAIADABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAOQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAjIAuAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIAAAMQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIguAAIAAApIA0AAIAFABIABAEIAAAOIgBAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape.setTransform(115.9,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBLQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgCgEIgWgzIAAAAIgWAAIAAAzIgBAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgTAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgEIAAiJIABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAuAAQATAAAMAFQALAFAFAIQAFAJAAAJIAAAVQAAAKgFAHQgGAJgNAFIAYA3QAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAgWgGIAWAAQAKAAAHgEQAGgEAAgIIAAgLQAAgIgGgEQgHgEgKAAIgWAAg");
	this.shape_1.setTransform(103.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBHQgMgFgFgIQgGgIAAgJIAAhRQAAgJAGgIQAFgJAMgFQALgFATAAQAUAAAMAFQALAFAFAJQAGAIAAAJIAABRQAAAJgGAIQgFAIgLAFQgMAFgUABQgTgBgLgFgAgRgvQgFAEgBAIIAABGQABAJAFAEQAHAEAKAAQALAAAGgEQAGgEABgJIAAhGQgBgIgGgEQgGgEgLAAQgKAAgHAEg");
	this.shape_2.setTransform(90.1,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBHQgMgFgEgIQgFgIAAgJIAAhRQAAgJAFgIQAEgJAMgFQALgFATAAQAUAAALAFQALAFAFAJQAFAIAAAJIAAALQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgTAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgGQAAgIgGgEQgGgEgLAAQgKAAgFAEQgGAEAAAIIAABGQAAAJAGAEQAFAEAKAAQALAAAGgEQAGgEAAgJIAAgIQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIATAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAAOQAAAJgFAIQgFAIgLAFQgLAFgUABQgTgBgLgFg");
	this.shape_3.setTransform(77.4,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBHQgMgFgEgIQgGgIAAgJIAAgOQABgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAEgBIATAAIADABIABAFIAAAKQAAAIAHAEQAFAEALAAQALAAAGgEQAGgEAAgIIAAgHQAAgHgFgDQgGgEgIgDIgggMQgJgDgGgHQgFgIgBgKIAAgNQAAgJAFgIQAFgJAKgFQALgFATAAQASAAALAFQAMAFAEAJQAFAIAAAJIAAAJIgBAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgTAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgFQAAgIgFgEQgGgEgKAAQgKAAgGAEQgFAEAAAIIAAADQABAGADADIAFADIAmAOQALAEAHAHQAHAIABAMIAAARQgBAJgFAIQgEAIgMAFQgLAFgUABQgSgBgMgFg");
	this.shape_4.setTransform(64.7,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBLQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgCgEIgWgzIAAAAIgWAAIAAAzIgBAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgTAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBIgBgEIAAiJIABgEQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIAuAAQATAAAMAFQALAFAFAIQAFAJAAAJIAAAVQAAAKgFAHQgGAJgNAFIAYA3QAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAgWgGIAWAAQAKAAAHgEQAGgEAAgIIAAgLQAAgIgGgEQgHgEgKAAIgWAAg");
	this.shape_5.setTransform(47.6,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGQgLgFgGgIQgEgIAAgJIAAhtQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAEIAABnQABAJAGAEQAGAEAKAAQALAAAHgEQAGgEAAgJIAAhnIABgEQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIATAAQABAAABAAQAAAAABABQABAAAAAAQAAAAABABIABAEIAABtQAAAJgGAIQgEAIgNAFQgLAFgUABQgSgBgNgFg");
	this.shape_6.setTransform(34.1,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBHQgLgFgFgIQgGgIABgJIAAhRQgBgJAGgIQAFgJALgFQAMgFATAAQAUAAALAFQAMAFAFAJQAGAIAAAJIAABRQAAAJgGAIQgFAIgMAFQgLAFgUABQgTgBgMgFgAgRgvQgFAEgBAIIAABGQABAJAFAEQAHAEAKAAQALAAAHgEQAFgEABgJIAAhGQgBgIgFgEQgHgEgLAAQgKAAgHAEg");
	this.shape_7.setTransform(20.7,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJBLQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgwIgqhZIAAgEQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIAWAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIACAEIAVAyIACAEIABAFIAAACIABgCIABgFIACgEIAXgyIACgEQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIASAAQABAAABAAQAAAAABABQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAgBABIgpBVIAAA0IgBAEQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_8.setTransform(8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yourscore, new cjs.Rectangle(0,0,123.4,31.4), null);


(lib.youcanstillwin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAKIgCAAIgBgDIAAgNIABgCIACgBIAJAAIADABIAAACIAAANIAAADIgDAAg");
	this.shape.setTransform(312.5,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSApQgHgEgDgEQgDgEAAgGIAAgEIABgDIACAAIAJAAIACAAIABADIAAAEQAAAEAEACQAFADAHAAQAIAAAFgDQAEgCAAgEIAAgFQAAgEgCgBQgCgCgFgCIgYgJIgGgCIgFgGQgCgEAAgEIAAgGQAAgFADgFQACgEAHgDQAHgEAKAAQAMAAAGAEQAHADADAEQADAFAAAFIAAAEIgBACIgCABIgJAAIgCgBIgBgCIAAgEQAAgEgEgCQgEgDgIAAQgHAAgEADQgEACAAAEIAAADQABAEACABIAFADIAYAJQAHACAEAEQAEADAAAHIAAAJQAAAGgDAEQgDAEgHAEQgIACgLAAQgLAAgHgCg");
	this.shape_1.setTransform(306.6,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVArIgCgBIgBgDIAAg3QAAgGgDgDQgCgCgIgBIgJACIgIAEIgFADIAAA6IAAADIgDABIgKAAIgCgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAhMQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAJAAIADABIABADIAAAFQACgCAEgCQAEgDAFgBQAFgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IgBADIgCABg");
	this.shape_2.setTransform(298.1,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgnQAAgLAIgGQAIgGARgBQASABAIAGQAIAGAAALIAAAnQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_3.setTransform(289.1,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhNIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABACIAABNIgBACIgCABgAgEgkIgCgBIgBgDIAAgPIABgDIACgBIAJAAIACABIABADIAAAPIgBADIgCABg");
	this.shape_4.setTransform(282.6,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA8IgCgBIgBgCIAAhwIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAIADABIABACIAAAGIAGgFQAEgCAGgCQAEgBAHAAQANAAAGAGQAFAGAAALIAAAoQAAAKgFAHQgGAFgNABQgHAAgEgCIgJgDIgHgFIAAAoIAAACIgDABgAgEgrIgIADIgFAEIAAAoIAFADIAIAEIAJACQAHgBAEgDQACgDAAgEIAAgjQAAgFgCgDQgEgDgHgBQgFAAgEACg");
	this.shape_5.setTransform(276.2,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuArIgCgBIgBgDIAAg3QAAgGgDgDQgDgCgHgBIgKACIgIAEIgEADIAAABIAAABIAAA4IAAADIgDABIgJAAIgCgBIgBgDIAAg3QAAgGgDgDQgDgCgGgBIgKACIgIAEIgFADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJAAIACABIAAADIABAFQACgCAEgCQAEgDAFgBQAFgCAHAAQAIAAAGADQAFADACAGIAFgFIAKgFQAGgCAIAAQAMAAAGAGQAGAGAAAKIAAA7IgBADIgCABg");
	this.shape_6.setTransform(264.6,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVApQgGgEgCgEQgDgEAAgGIAAgIQAAgGADgEQACgFAGgCQAFgDAHAAIAaAAIAAgNQAAgGgDgDQgEgCgJAAQgJAAgDACQgEADAAAFIAAACIgBACIgCABIgJAAIgCgBIgBgCIAAgDQgBgKAIgGQAHgGARgBQAMAAAHADQAHADADAFQADAFAAAHIAAA6IAAADIgDABIgIAAIgDgBIgBgDIgBgEIgGAEIgJAEQgEABgGAAQgIAAgFgCgAgOAJQgCADgBAFIAAADQAAAGAEABQADADAGAAQAEAAAFgCIAHgDIAFgEIAAgOIgWAAQgGAAgDACg");
	this.shape_7.setTransform(253.1,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA7IgDgBIAAgCIAAg4QAAgFgDgDQgDgCgGgBIgKACIgHADIgGAEIAAA6IAAACIgDABIgJAAIgDgBIgBgCIAAhvIABgDIADgBIAJAAIADABIAAADIAAAoIAHgFIAJgEQAEgBAHAAQAMAAAGAGQAGAGAAAJIAAA8IAAACIgDABg");
	this.shape_8.setTransform(244.3,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA4QgIgEgDgGQgEgGAAgHIAAhBQAAgHAEgGQADgGAIgEQAIgDAOAAQAOAAAJADQAIAEADAGQAEAGgBAHIAAAIIAAADQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgJAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgBgDIAAgFQAAgHgFgEQgFgEgLAAQgKAAgFAEQgFAEAAAHIAAA7QAAAHAFAEQAFAEAKAAQALAAAFgEQAFgEAAgHIAAgIIABgCIADgBIAJAAIADABIAAACIAAALQABAHgEAGQgDAGgIAEQgJADgOAAQgOAAgIgDg");
	this.shape_9.setTransform(235.2,23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA8IgDgBIgBgCIAAhCIgKAAIgCgBIgBgDIAAgGIABgCIACgBIAJgBIABAAIAAgNQAAgKAIgHQAHgGASAAIABAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIABACIAAAHIgBADIgDABIgBAAQgJAAgEADQgEACAAAGIAAALIAQAAIADABIABACIAAAHIgBADIgDABIgQAAIAABCIgBACIgCABg");
	this.shape_10.setTransform(223.9,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgnQAAgLAIgGQAIgGARgBQASABAIAGQAIAGAAALIAAAnQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_11.setTransform(216.5,25.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_12.setTransform(205.5,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgCgBIgBgDIAAg3QAAgGgDgDQgDgCgHgBIgIACIgJAEIgFADIAAA6IgBADIgCABIgKAAIgCgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAJAAIACABIABADIABAFQACgCAEgCQAEgDAFgBQAFgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IgBADIgCABg");
	this.shape_13.setTransform(198,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSApQgHgEgDgEQgEgGABgHIAAgnQgBgIAEgEQADgGAHgDQAHgDALAAQANAAAGADQAHADAEAGQADAEAAAIIAAATIgBACIgCACIguAAIAAAPQAAADACADQABADAEABQAEACAFAAQAHAAAEgCQADgBACgDQACgDgBgDIAAgCIABgCIADgBIAJAAIACABIABACIAAADQAAAHgDAGQgEAEgHAEQgHACgMAAQgLAAgHgCgAgMgbQgEAEAAAEIAAALIAhAAIAAgLQABgEgEgEQgEgDgKAAQgIAAgEADg");
	this.shape_14.setTransform(189.3,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAqIgCAAIgCgDIgahNQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgBIALAAIACABIABACIAQAwIACAFIAAAFIAAADIABgDIABgFIABgFIARgwIABgCIACgBIAKAAIACABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgcBNIgBADIgCAAg");
	this.shape_15.setTransform(181.2,25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdA6IgDgBIAAgDIAAhrIAAgDIADgBIA5AAIACABIABACIAAAIIgBACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgsAAIAAAjIApAAIACAAIABADIAAAGIgBADIgCAAIgpAAIAAAoIAuAAIACAAIABADIAAAIIgBACIgCABg");
	this.shape_16.setTransform(173.3,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVArIgDgBIAAgDIAAg3QAAgGgDgDQgDgCgGgBIgJACIgIAEIgGADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJAAIABABIABADIABAFQACgCAEgCIAKgEQAEgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IgBADIgCABg");
	this.shape_17.setTransform(164.1,25.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSArIgDgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJAAIACABIAAADIABAHIAGgFIAIgFQAGgCAFAAIADABIABACIAAAIIgBADIgDAAQgGABgFACIgIAEIgGAEIAAA4IgBADIgCABg");
	this.shape_18.setTransform(156.9,25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAlQgFgGAAgKIAAg8IABgCIACgBIAJAAIADABIAAACIAAA5QABAEADAEQACADAIAAQADgBAFgBIAIgEIAEgDIAAg7IABgCIADgBIAKAAIACABIAAACIAABOIAAACIgCAAIgKAAIgCAAIgBgCIgBgGQgCADgDACIgJADQgFACgHAAQgMAAgGgGg");
	this.shape_19.setTransform(148.9,25.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgnQAAgLAIgGQAIgGARgBQASABAIAGQAIAGAAALIAAAnQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_20.setTransform(140,25.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEA6IgDgBIAAgDIAAhhIgcAAIgCgBIgBgCIAAgIIABgCIACgBIBHAAIACABIABACIAAAIIgBACIgCABIgcAAIAABhIAAADIgDABg");
	this.shape_21.setTransform(131.4,23.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSArIgDgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJAAIABABIABADIABAHIAGgFIAIgFQAGgCAFAAIADABIABACIAAAIIgBADIgDAAQgGABgFACIgIAEIgGAEIAAA4IgBADIgCABg");
	this.shape_22.setTransform(121.1,25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVApQgGgEgCgEQgDgEAAgGIAAgIQAAgGADgEQACgFAGgCQAFgDAHAAIAaAAIAAgNQABgGgEgDQgDgCgKAAQgJAAgDACQgEADAAAFIAAACIgBACIgDABIgIAAIgCgBIgBgCIAAgDQAAgKAHgGQAIgGAQgBQAMAAAHADQAHADADAFQADAFAAAHIAAA6IAAADIgDABIgIAAIgDgBIgBgDIgBgEIgFAEIgJAEQgFABgGAAQgIAAgFgCgAgOAJQgDADAAAFIAAADQAAAGAEABQADADAGAAQAEAAAFgCIAHgDIAFgEIAAgOIgWAAQgGAAgDACg");
	this.shape_23.setTransform(113.2,25.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDA7IgDgBIgBgCIAAhvIABgDIADgBIAIAAIACABIABADIAABvIgBACIgCABg");
	this.shape_24.setTransform(106.9,23.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDA7IgDgBIgBgCIAAhvIABgDIADgBIAIAAIACABIABADIAABvIgBACIgCABg");
	this.shape_25.setTransform(102.9,23.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgnQAAgLAIgGQAIgGARgBQASABAIAGQAIAGAAALIAAAnQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_26.setTransform(96.4,25.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbA2QgGgGAAgLIAAgoQAAgKAGgHQAGgGAMAAQAHAAAEACIAJADIAHAFIAAgoIAAgCIADgBIAKAAIADABIAAACIAABvIAAADIgDABIgJAAIgDgBIgBgDIAAgFIgGAFIgKADQgDACgIAAQgMAAgGgGgAgOgIQgDADAAAFIAAAjQAAAEADADQADADAHABIAJgCIAIgEIAFgDIAAgoIgFgDIgIgEQgFgBgEAAQgHAAgDADg");
	this.shape_27.setTransform(87.4,23.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVArIgDgBIAAgDIAAg3QAAgGgDgDQgDgCgGgBIgJACIgIAEIgGADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJAAIACABIAAADIABAFQACgCAEgCQAEgDAGgBQAEgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IAAADIgDABg");
	this.shape_28.setTransform(74.9,25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgnQAAgLAIgGQAIgGARgBQASABAIAGQAIAGAAALIAAAnQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_29.setTransform(65.8,25.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhNIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIAAACIAABNIAAACIgDABgAgEgkIgCgBIgBgDIAAgPIABgDIACgBIAJAAIADABIAAADIAAAPIAAADIgDABg");
	this.shape_30.setTransform(59.4,23.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhvIABgDIACgBIAJAAIADABIAAADIAABvIAAACIgDABg");
	this.shape_31.setTransform(55.3,23.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhvIABgDIACgBIAJAAIADABIAAADIAABvIAAACIgDABg");
	this.shape_32.setTransform(51.3,23.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhNIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIAAACIAABNIAAACIgDABgAgEgkIgCgBIgBgDIAAgPIABgDIACgBIAJAAIADABIAAADIAAAPIAAADIgDABg");
	this.shape_33.setTransform(47.2,23.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAuArIgCgBIgBgDIAAg3QAAgGgDgDQgDgCgHgBIgKACIgIAEIgEADIAAABIAAABIAAA4IAAADIgDABIgJAAIgCgBIgBgDIAAg3QAAgGgDgDQgDgCgGgBIgKACIgIAEIgFADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAJAAIABABIABADIABAFQACgCAEgCQAEgDAFgBQAFgCAHAAQAIAAAGADQAFADACAGIAFgFIAKgFQAGgCAIAAQAMAAAGAGQAGAGAAAKIAAA7IgBADIgCABg");
	this.shape_34.setTransform(38.2,25.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSApQgHgEgDgEQgEgGAAgHIAAgnQAAgIAEgEQADgGAHgDQAIgDAKAAQANAAAGADQAIADACAGQADAEABAIIAAATIgBACIgDACIgtAAIAAAPQABADABADQACADADABQAEACAFAAQAHAAAEgCQADgBACgDQABgDABgDIAAgCIAAgCIADgBIAIAAIADABIABACIAAADQgBAHgDAGQgCAEgIAEQgHACgMAAQgLAAgHgCgAgMgbQgDAEgBAEIAAALIAiAAIAAgLQgBgEgDgEQgEgDgKAAQgIAAgEADg");
	this.shape_35.setTransform(23.4,25.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAVA7IgCgBIgBgCIAAg4QAAgFgDgDQgCgCgIgBIgJACIgIADIgFAEIAAA6IAAACIgDABIgKAAIgCgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhvQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBIACgBIAKAAIADABIAAADIAAAoIAGgFIAKgEQAEgBAHAAQAMAAAGAGQAGAGAAAJIAAA8IgBACIgCABg");
	this.shape_36.setTransform(14.6,23.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_37.setTransform(7,24.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVArIgDgBIAAgDIAAg3QAAgGgDgDQgDgCgGgBIgJACIgIAEIgGADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDIADgBIAJAAIABABIABADIABAFQACgCAEgCQAEgDAFgBQAFgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IgBADIgCABg");
	this.shape_38.setTransform(323.8,5.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDA7IgDgBIgBgCIAAhNIABgCIADgBIAIAAIACABIABACIAABNIgBACIgCABgAgDgkIgDgBIgBgDIAAgPIABgDIADgBIAIAAIACABIABADIAAAPIgBADIgCABg");
	this.shape_39.setTransform(317.2,3.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AASAqIgCAAIgBgDIgNgxIgBgFIAAgEIgBAJIgPAxIgBADIgCAAIgMAAIgCAAIgBgDIgVhNQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADgBIAJAAIADABIABACIAOA0IABAFIABADIABgIIAPg0IABgCIADgBIAJAAIACABIABACIAOA0IABAFIAAACIABgCIABgFIAOg0IABgCIACgBIAJAAIACABIAAACIgVBNIgCADIgCAAg");
	this.shape_40.setTransform(309.3,5.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhvIABgDIACgBIAJAAIACABIABADIAABvIgBACIgCABg");
	this.shape_41.setTransform(297.9,3.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEA7IgCgBIgBgCIAAhvIABgDIACgBIAJAAIACABIABADIAABvIgBACIgCABg");
	this.shape_42.setTransform(293.9,3.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDA7IgDgBIgBgCIAAhNIABgCIADgBIAIAAIACABIABACIAABNIgBACIgCABgAgDgkIgDgBIgBgDIAAgPIABgDIADgBIAIAAIACABIABADIAAAPIgBADIgCABg");
	this.shape_43.setTransform(289.8,3.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_44.setTransform(284.8,4.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgDgEAAgGIAAgEIABgDIACgBIAJAAIACABIABADIAAAEQAAAEAEACQAFACAHABQAIgBAFgCQAEgCAAgEIAAgFQAAgDgCgCQgCgCgFgCIgYgJIgGgCIgFgGQgCgDAAgFIAAgGQAAgFADgFQACgEAHgDQAHgDAKgBQAMABAGADQAHADADAEQADAFAAAFIAAAEIgBACIgCACIgJAAIgCgCIgBgCIAAgEQAAgEgEgDQgEgCgIAAQgHAAgEACQgEADAAAEIAAADQABAEACABIAFADIAYAJQAHACAEAEQAEADAAAHIAAAJQAAAGgDAEQgDAFgHADQgIACgLAAQgLAAgHgCg");
	this.shape_45.setTransform(277.9,5.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAVArIgDgBIAAgDIAAg3QAAgGgDgDQgDgCgGgBIgJACIgIAEIgGADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDIADgBIAJAAIABABIABADIABAFQACgCAEgCQAEgDAFgBQAFgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IAAADIgDABg");
	this.shape_46.setTransform(265.8,5.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVApQgGgDgCgFQgDgEAAgGIAAgIQAAgGADgEQACgFAGgCQAFgDAHAAIAaAAIAAgNQABgGgEgDQgDgCgKAAQgJAAgDACQgEADAAAFIAAACIgBADIgDAAIgIAAIgCAAIgBgDIAAgDQAAgKAHgHQAIgFAQgBQAMAAAHADQAHADADAFQADAGAAAGIAAA7IAAACIgDABIgIAAIgDgBIgBgCIgBgFIgFAEIgJAEQgFACgGgBQgIAAgFgCgAgOAJQgDADAAAFIAAAEQAAAEAEACQADADAGAAQAEAAAFgCIAHgDIAFgEIAAgPIgWAAQgGAAgDADg");
	this.shape_47.setTransform(256.8,5.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgEgGAAgHIAAgoQAAgKAIgHQAHgFARgBQAMAAAHADQAHADADAGQAEAEAAAHIAAADIgBADIgDABIgJAAIgCgBIgBgDIAAgCQAAgFgDgDQgEgCgKAAQgIAAgEACQgEADABAFIAAAmQgBAFAEADQAEADAIAAQAKAAAEgDQADgDAAgFIAAgEIABgCIACAAIAJAAIADAAIABACIAAAFQAAAHgEAGQgDAFgHADQgHACgMAAQgLAAgHgCg");
	this.shape_48.setTransform(248.5,5.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgaAlQgHgGAAgKIAAg8IABgCIACgBIALAAIACABIABACIAAA5QAAAEACAEQADACAHAAQAFAAAEgBIAHgEIAGgDIAAg7IAAgCIACgBIAKAAIADABIABACIAABNIgBADIgDAAIgJAAIgCAAIgBgDIAAgFQgDACgEADIgJADQgEACgGAAQgNAAgFgGg");
	this.shape_49.setTransform(236.1,5.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgoQAAgKAIgHQAIgFARgBQASABAIAFQAIAHAAAKIAAAoQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_50.setTransform(227.2,5.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNA8IgCgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAKgeIgdhRQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIACgBIAKAAIADABIABACIAQAxIACAFIAAADIAAADIABgFIACgGIARgxIABgCIADgBIAJAAIACABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgmBvIgBADIgCABg");
	this.shape_51.setTransform(219,6.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgIATIgCgCIgCgHQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIACgBQAFgCACgDQABgBAAgEIAAgLIABgCIABgBIAKAAIADABIABACIAAAMQAAAIgGAFQgFAGgIADIgCAAIgBAAg");
	this.shape_52.setTransform(209.1,9.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_53.setTransform(204.6,4.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgDgEAAgGIAAgEIABgDIACgBIAJAAIACABIABADIAAAEQAAAEAEACQAFACAHABQAIgBAFgCQAEgCAAgEIAAgFQAAgDgCgCQgCgCgFgCIgYgJIgGgCIgFgGQgCgDAAgFIAAgGQAAgFADgFQACgEAHgDQAHgDAKgBQAMABAGADQAHADADAEQADAFAAAFIAAAEIgBACIgCACIgJAAIgCgCQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgEQAAgEgEgDQgEgCgIAAQgHAAgEACQgEADAAAEIAAADQABAEACABIAFADIAYAJQAHACAEAEQAEADAAAHIAAAJQAAAGgDAEQgDAFgHADQgIACgLAAQgLAAgHgCg");
	this.shape_54.setTransform(197.7,5.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgEgGAAgHIAAgoQAAgHAEgEQADgGAHgDQAHgDALAAQANAAAGADQAIADACAGQAEAEAAAHIAAAUIgBADIgDABIgtAAIAAAPQABADABADQABADAEABQAEACAFAAQAHAAAEgCQADgBACgDQABgDABgDIAAgCIAAgCIADgBIAIAAIADABIABACIAAADQAAAHgEAGQgCAFgIADQgHACgMAAQgLAAgHgCgAgMgbQgDADgBAFIAAALIAiAAIAAgLQgBgFgDgDQgEgDgKAAQgIAAgEADg");
	this.shape_55.setTransform(189.5,5.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_56.setTransform(182.2,4.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgDgEAAgGIAAgEIABgDIACgBIAJAAIACABIABADIAAAEQAAAEAEACQAFACAHABQAIgBAFgCQAEgCAAgEIAAgFQAAgDgCgCQgCgCgFgCIgYgJIgGgCIgFgGQgCgDAAgFIAAgGQAAgFADgFQACgEAHgDQAHgDAKgBQAMABAGADQAHADADAEQADAFAAAFIAAAEIgBACIgCACIgJAAIgCgCIgBgCIAAgEQAAgEgEgDQgEgCgIAAQgHAAgEACQgEADAAAEIAAADQABAEACABIAFADIAYAJQAHACAEAEQAEADAAAHIAAAJQAAAGgDAEQgDAFgHADQgIACgLAAQgLAAgHgCg");
	this.shape_57.setTransform(175.3,5.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWApQgEgDgDgFQgDgEAAgGIAAgIQAAgGADgEQACgFAFgCQAFgDAJAAIAaAAIAAgNQgBgGgDgDQgEgCgJAAQgJAAgDACQgEADAAAFIAAACIgBADIgCAAIgJAAIgCAAIgBgDIAAgDQgBgKAIgHQAHgFARgBQAMAAAHADQAHADADAFQADAGAAAGIAAA7IAAACIgDABIgJAAIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgFIgHAEIgJAEQgDACgHgBQgIAAgGgCgAgOAJQgCADgBAFIAAAEQAAAEADACQAEADAGAAQAEAAAEgCIAIgDIAGgEIAAgPIgXAAQgHAAgCADg");
	this.shape_58.setTransform(166.9,5.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgIA8IgDgBIgBgCIAAhCIgKAAIgCgBIgBgDIAAgGIABgCIACgBIAJgBIABAAIAAgNQAAgKAIgHQAHgGASAAIABAAIADABIABACIAAAHIgBADIgDABIgBAAQgJAAgEADQgEACAAAGIAAALIAQAAIADABIABACIAAAHIgBADIgDABIgQAAIAABCIgBACIgCABg");
	this.shape_59.setTransform(160,3.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgDgGgBgHIAAgoQABgHADgEQADgGAHgDQAIgDALAAQALAAAHADQAIADACAGQADAEAAAHIAAAUIAAADIgDABIgtAAIAAAPQABADABADQACADADABQAEACAGAAQAGAAAEgCQAEgBABgDQABgDABgDIAAgCIABgCIACgBIAIAAIADABIAAACIAAADQAAAHgDAGQgCAFgIADQgHACgMAAQgLAAgHgCgAgMgbQgDADgBAFIAAALIAiAAIAAgLQgBgFgDgDQgEgDgJAAQgJAAgEADg");
	this.shape_60.setTransform(149.3,5.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAVA7IgCgBIgBgCIAAg4QAAgFgDgDQgCgDgIAAIgJACIgIADIgFAEIAAA6IAAACIgDABIgKAAIgCgBIgBgCIAAhvIABgDIACgBIAKAAIADABIAAADIAAAnIAGgEIAKgEQAEgBAHAAQAMAAAGAGQAGAGAAAJIAAA8IgBACIgCABg");
	this.shape_61.setTransform(140.5,3.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_62.setTransform(132.9,4.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AARA0QgLAAgGgCQgHgDgDgFQgDgGAAgHIAAguIgJAAIgDgBIAAgDIAAgGIAAgCIADgBIAIgBIABAAIAAgRIABgDIADAAIAJAAIACAAIABADIAAARIARAAIADABIAAACIAAAHIAAADIgDABIgRAAIAAAsQAAAGAEADQADACAKAAIADAAIADABIAAADIAAAHIAAADIgDAAg");
	this.shape_63.setTransform(123.3,4.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgoQAAgKAIgHQAIgFARgBQASABAIAFQAIAHAAAKIAAAoQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_64.setTransform(115.9,5.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAVArIgCgBIgBgDIAAg3QAAgGgDgDQgCgCgIgBIgJACIgIAEIgFADIAAA6IAAADIgDABIgKAAIgCgBIgBgDIAAhMIABgDIACgBIAJAAIADABIABADIAAAFQACgCAEgCQAEgDAGgBQAEgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IAAADIgDABg");
	this.shape_65.setTransform(107,5.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgDgGgBgHIAAgoQABgHADgEQADgGAHgDQAIgDALAAQAMAAAHADQAGADAEAGQACAEAAAHIAAAUIAAADIgCABIgtAAIAAAPQgBADACADQACADADABQAEACAGAAQAGAAAEgCQAEgBABgDQACgDAAgDIAAgCIABgCIACgBIAJAAIACABIAAACIAAADQAAAHgCAGQgEAFgGADQgIACgMAAQgLAAgHgCgAgMgbQgEADABAFIAAALIAhAAIAAgLQAAgFgEgDQgEgDgJAAQgJAAgEADg");
	this.shape_66.setTransform(94.6,5.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSArIgDgBIgBgDIAAhMIABgDIADgBIAJAAIABABIABADIABAHIAGgFIAIgFQAGgCAFAAIADABIABACIAAAIIgBADIgDAAQgGABgFACIgIAEIgGAEIAAA4IgBADIgCABg");
	this.shape_67.setTransform(87.8,5.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgIATIgCgCIgCgHIAAgDIACgBQAEgCACgDQACgBAAgEIAAgLIABgCIABgBIAKAAIADABIAAACIAAAMQAAAHgFAGQgFAGgJADIgBAAIgBAAg");
	this.shape_68.setTransform(82,-1.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgaAlQgHgGAAgKIAAg8IABgCIACgBIAKAAIADABIABACIAAA5QAAAEACAEQAEACAGAAQAEAAAFgBIAHgEIAGgDIAAg7IAAgCIACgBIAKAAIADABIAAACIAABNIAAADIgDAAIgJAAIgCAAIgBgDIAAgFQgCACgFADIgJADQgDACgHAAQgNAAgFgGg");
	this.shape_69.setTransform(75.8,5.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgKIAAgoQAAgKAIgHQAIgFARgBQASABAIAFQAIAHAAAKIAAAoQAAAKgIAHQgIAGgSAAQgRAAgIgGgAgNgbQgEADAAAGIAAAlQAAAFAEADQAEADAJAAQAJAAAFgDQAEgDAAgFIAAglQAAgGgEgDQgFgCgJAAQgJAAgEACg");
	this.shape_70.setTransform(66.9,5.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNA8IgCgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAKgeIgdhRQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIACgBIAKAAIADABIABACIAQAxIACAFIAAADIAAADIABgFIACgGIARgxIABgCIADgBIAJAAIACABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgmBvIgBADIgCABg");
	this.shape_71.setTransform(58.7,6.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgIA8IgDgBIgBgCIAAhCIgKAAIgCgBIgBgDIAAgGIABgCIACgBIAJgBIABAAIAAgNQAAgKAIgHQAHgGASAAIABAAIADABIABACIAAAHIgBADIgDABIgBAAQgJAAgEADQgEACAAAGIAAALIAQAAIADABIABACIAAAHIgBADIgDABIgQAAIAABCIgBACIgCABg");
	this.shape_72.setTransform(48.6,3.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgDA7IgDgBIgBgCIAAhNIABgCIADgBIAIAAIACABIABACIAABNIgBACIgCABgAgDgkIgDgBIgBgDIAAgPIABgDIADgBIAIAAIACABIABADIAAAPIgBADIgCABg");
	this.shape_73.setTransform(43.6,3.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAVArIgDgBIAAgDIAAg3QAAgGgDgDQgDgCgGgBIgJACIgIAEIgGADIAAA6IgBADIgCABIgJAAIgDgBIgBgDIAAhMIABgDIADgBIAJAAIABABIABADIABAFQACgCAEgCQAEgDAGgBQAEgCAHAAQAMAAAGAGQAGAGAAAKIAAA7IAAADIgDABg");
	this.shape_74.setTransform(33.5,5.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSApQgHgDgDgFQgEgGAAgHIAAgoQAAgHAEgEQADgGAHgDQAIgDALAAQAMAAAGADQAIADACAGQADAEABAHIAAAUIgBADIgDABIgtAAIAAAPQABADABADQACADADABQAEACAGAAQAGAAAEgCQADgBACgDQABgDABgDIAAgCIAAgCIADgBIAIAAIADABIABACIAAADQgBAHgDAGQgCAFgIADQgHACgMAAQgLAAgHgCgAgMgbQgDADgBAFIAAALIAiAAIAAgLQgBgFgDgDQgEgDgJAAQgJAAgEADg");
	this.shape_75.setTransform(24.7,5.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgFAqIgCAAIgCgDIgahNQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgBIALAAIACABIABACIAQAwIACAFIAAAFIAAADIABgDIABgFIABgFIARgwIABgCIACgBIAKAAIACABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgcBNIgBADIgCAAg");
	this.shape_76.setTransform(16.6,5.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdA6IgDgBIAAgDIAAhrIAAgDIADgBIA5AAIACABIABACIAAAIIgBACIgCABIgsAAIAAAjIApAAIACAAIABADIAAAGIgBADIgCAAIgpAAIAAAoIAuAAIACAAIABADIAAAIIgBACIgCABg");
	this.shape_77.setTransform(8.7,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.youcanstillwin, new cjs.Rectangle(2,-9,349,45.3), null);


(lib.yellowbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDB356").s().p("EhPwADwIAAnfMCfhAAAIAAHfg");
	this.shape.setTransform(510.5,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowbar, new cjs.Rectangle(0,0,1021,48), null);


(lib.tourneventlogo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tourneventlogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tourneventlogo_1, new cjs.Rectangle(0,0,163,170), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.parent = this;
	this.instance.setTransform(513,-104);

	this.instance_1 = new lib.Buttonpressed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(513,-104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(513,-104,284,235);


(lib.playstop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Buttonflash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.playstop, new cjs.Rectangle(0,0,284,235), null);


(lib.playnow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAWQgFAAgCgCQgCgCABgEIAAgbQgBgEACgCQACgCAFAAIAbAAQAFAAACACQABACABAEIAAAbQgBAEgBACQgCACgFAAg");
	this.shape.setTransform(298.3,134.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAi3IgwAAQgFAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAFAAICOAAQAEAAACACQACACAAAFIAAAVQAAAFgCACQgCACgEAAIgxAAIAAC3QAAAEgCADQgCACgEAAg");
	this.shape_1.setTransform(285.6,124.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_2.setTransform(266.6,124.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7B0QgEAAgDgCQgBgDAAgEIAAjVQAAgEABgCQADgDAEAAIBzAAQAEAAADACQABACAAAFIAAAVQAAAFgBACQgDACgEAAIhOAAIAAA3IBIAAQAFAAACACQADABgBAFIAAATQABAFgDABQgCACgFAAIhIAAIAABAIBRAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_3.setTransform(247.8,124.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOB0QgFAAgCgCQgCgCgCgFIg/jVQgBgEABgCQACgDAEAAIAhAAQAEAAACADIAEAGIAgBzQADAJACAMIACATIABAJIABgJIADgTIAFgVIAhhzIADgGQADgDAEAAIAeAAQAEAAABADQACACgBAEIhADVQgBAFgCACQgDACgEAAg");
	this.shape_4.setTransform(229.2,124.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7B0QgFAAgCgCQgBgDAAgEIAAjVQAAgEABgCQACgDAFAAIB0AAQADAAADACQACACAAAFIAAAVQAAAFgCACQgDACgDAAIhPAAIAAA3IBIAAQAFAAACACQADABgBAFIAAATQABAFgDABQgCACgFAAIhIAAIAABAIBRAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_5.setTransform(211.6,124.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2B74B").s().p("AArB0QgEAAgCgDIgDgGIghhPIgBAAIgiAAIAABPQAAAEgCADQgCACgEAAIgeAAQgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAgQAAAQgJAMQgIAMgUAIIAkBWQACAEgCACQgDADgFAAgAgigJIAiAAQAQAAAKgHQAJgGAAgNIAAgQQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_6.setTransform(185.9,124.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2B74B").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_7.setTransform(166,124.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2B74B").s().p("Ag5B0QgEAAgCgDQgBgCAAgEIAAjVQAAgEABgCQACgDAFAAIAdAAQAFAAACADQACACgBAEIAAC4IBMAAQAEAAACACQACABAAAFIAAAVQAAAFgCACQgCACgEAAg");
	this.shape_8.setTransform(149.3,124.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2B74B").s().p("Ag5B0QgEAAgCgDQgBgCAAgEIAAjVQAAgEABgCQACgDAFAAIAdAAQAFAAACADQACACgBAEIAAC4IBMAAQAEAAACACQACABAAAFIAAAVQAAAFgCACQgCACgEAAg");
	this.shape_9.setTransform(133.1,124.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2B74B").s().p("AgwBuQgSgHgIgNQgIgNAAgOIAAh9QAAgPAIgMQAIgNASgHQASgIAeAAQAfAAASAIQASAHAIANQAIAMAAAPIAAB9QAAAOgIANQgIANgSAHQgSAIgfABQgegBgSgIgAgahJQgJAGAAANIAABtQAAAMAJAHQAKAGAQABQARgBAKgGQAKgHAAgMIAAhtQAAgNgKgGQgKgHgRABQgQgBgKAHg");
	this.shape_10.setTransform(113.9,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2B74B").s().p("AhKB0QgEAAgCgDQgBgCgBgEIAAjVQABgEABgCQACgDAEAAIBKAAQAeABATAHQARAIAJANQAHAMAAAPIAAB3QAAAPgHAMQgJANgRAIQgTAIgeAAgAgkBOIAkAAQARAAAKgHQAJgGAAgNIAAhnQAAgNgJgGQgKgGgRAAIgkAAg");
	this.shape_11.setTransform(93.4,124.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2B74B").s().p("AAwB0IgFgBIgDgDIhBhwIgKgTIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_12.setTransform(65.5,124.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2B74B").s().p("AgwBuQgSgHgIgNQgIgNAAgOIAAh9QAAgPAIgMQAIgNASgHQASgIAeAAQAfAAASAIQASAHAIANQAIAMAAAPIAAB9QAAAOgIANQgIANgSAHQgSAIgfABQgegBgSgIgAgahJQgJAGAAANIAABtQAAAMAJAHQAKAGAQABQARgBAKgGQAKgHAAgMIAAhtQAAgNgKgGQgKgHgRABQgQgBgKAHg");
	this.shape_13.setTransform(44.6,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2B74B").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_14.setTransform(29.7,124.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2B74B").s().p("Ag5B0QgEAAgBgDQgCgCAAgEIAAjVQAAgEACgCQACgDAEAAIAeAAQAEAAACADQACACAAAEIAAC4IBKAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_15.setTransform(17.8,124.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2B74B").s().p("Ag5B0QgEAAgBgDQgCgCAAgEIAAjVQAAgEACgCQACgDAEAAIAeAAQAEAAACADQACACAAAEIAAC4IBKAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_16.setTransform(1.6,124.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2B74B").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_17.setTransform(-12,124.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2B74B").s().p("ABDB0QgEAAgCgCQgCgCAAgFIAAiAIgCAGIgEANIgEALIgaA/QgBAEgDADQgDACgEAAIgXAAQgFAAgCgDQgDgCgBgEIgdhEIgEgIIgCgKIgCgGIAAB/QAAAFgCACQgBACgFAAIgbAAQgEAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAEAAIAbAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIACADIA0B2IAFAKIADAKIAAAEIABgEIAEgJIAEgLIAyh2QAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBIAFgBIAcAAQAFAAACADQABACAAAEIAADVQAAAFgBACQgCACgFAAg");
	this.shape_18.setTransform(-29.3,124.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7B0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIB0AAQADAAACACQACACAAAFIAAAVQAAAFgCACQgCACgDAAIhOAAIAAA3IBIAAQAEAAACACQACABAAAFIAAATQAAAFgCABQgCACgEAAIhIAAIAABAIBRAAQAEAAACACQACABAAAFIAAAVQAAAFgCACQgCACgEAAg");
	this.shape_19.setTransform(287.8,88.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAtB0QgFAAgCgCQgBgDAAgEIAAhbIhJAAIAABbQAAAEgCADQgBACgFAAIgeAAQgEAAgCgCQgBgDAAgEIAAjVQAAgEABgCQACgDAEAAIAeAAQAFAAABADQACACAAAEIAABVIBJAAIAAhVQAAgEABgCQACgDAFAAIAdAAQAFAAACADQACACAAAEIAADVQAAAEgCADQgCACgFAAg");
	this.shape_20.setTransform(268,88.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAi3IgxAAQgEAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAEAAICOAAQAFAAACACQACACAAAFIAAAVQAAAFgCACQgCACgFAAIgwAAIAAC3QAAAEgCADQgBACgFAAg");
	this.shape_21.setTransform(248.9,88.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AArB0QgEAAgCgDIgDgGIghhPIgBAAIgiAAIAABPQAAAEgCADQgCACgEAAIgeAAQgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAgQAAAQgJAMQgIAMgUAIIAkBWQACAEgCACQgDADgFAAgAgigJIAiAAQAQAAAKgHQAJgGAAgNIAAgQQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_22.setTransform(224,88.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwBuQgSgIgIgMQgIgMAAgPIAAh9QAAgPAIgMQAIgNASgHQASgJAeABQAfgBASAJQASAHAIANQAIAMAAAPIAAB9QAAAPgIAMQgIAMgSAIQgSAIgfAAQgeAAgSgIgAgahJQgJAGAAANIAABsQAAANAJAHQAKAGAQABQARgBAKgGQAKgHAAgNIAAhsQAAgNgKgGQgKgHgRAAQgQAAgKAHg");
	this.shape_23.setTransform(203.3,88.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag+B0QgEAAgCgCQgBgDAAgEIAAjVQAAgEABgCQACgDAEAAIB8AAQAEAAACACQACACAAAFIAAAVQAAAFgCACQgCACgEAAIhWAAIAAA3IBQAAQAEAAACACQACABABAFIAAAVQgBAEgCACQgCACgEAAIhQAAIAABbQAAAEgCADQgBACgFAAg");
	this.shape_24.setTransform(184.9,88.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvBuQgSgIgIgMQgHgMAAgPIAAgVQAAgFACgCQACgCAEAAIAdAAQAEAAACACQACACAAAFIAAAOQAAANAJAGQAJAHARgBQARABAJgHQAKgGAAgNIAAgKQgBgLgIgFQgIgGgMgEIg0gTQgNgEgJgMQgJgMAAgPIAAgUQAAgPAHgMQAHgNARgHQARgJAcABQAegBARAJQARAHAIANQAHAMAAAPIAAAOQAAAEgCACQgCACgFABIgcAAQgEgBgCgCQgCgCAAgEIAAgIQAAgNgIgFQgJgHgQAAQgQAAgIAHQgIAFAAANIAAAFQAAAJAFAEQAEAEAFABIA6AWQARAFALAMQAMAMAAASIAAAbQAAAPgIAMQgHAMgSAIQgSAIgeAAQgdAAgSgIg");
	this.shape_25.setTransform(159.2,88.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_26.setTransform(140,88.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvBuQgSgIgHgMQgHgMAAgPIAAh9QAAgPAHgMQAHgNASgHQASgJAdABQAfgBARAJQARAHAIANQAHAMAAAPIAAAOQAAAEgCACQgCACgEAAIgcAAQgEAAgDgCQgCgCAAgEIAAgGQABgNgKgGQgIgHgSAAQgPAAgJAHQgJAGABANIAABsQgBANAJAHQAJAGAPABQASgBAIgGQAKgHgBgMIAAgXIghAAQgDAAgCgCQgDgBAAgFIAAgWQAAgDADgCQACgCADAAIBFAAQAFAAACACQACACAAADIAAA9QAAAPgHAMQgIAMgRAIQgRAIgfAAQgdAAgSgIg");
	this.shape_27.setTransform(120.9,88.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag7B0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBzAAQAFAAACACQABACAAAFIAAAVQAAAFgBACQgCACgFAAIhNAAIAAA3IBIAAQAEAAACACQACABAAAFIAAATQAAAFgCABQgCACgEAAIhIAAIAABAIBRAAQAEAAACACQACABAAAFIAAAVQAAAFgCACQgCACgEAAg");
	this.shape_28.setTransform(102.7,88.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOB0QgFAAgCgCQgCgCgCgFIg/jVQgBgEABgCQACgDAEAAIAhAAQAEAAACADIAEAGIAgBzQADAJACAMIACATIABAJIABgJIADgTIAFgVIAhhzIADgGQADgDAEAAIAeAAQAEAAABADQACACgBAEIhADVQgBAFgCACQgDACgEAAg");
	this.shape_29.setTransform(84.1,88.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgwBuQgSgIgIgMQgIgMAAgPIAAh9QAAgPAIgMQAIgNASgHQASgJAeABQAfgBASAJQASAHAIANQAIAMAAAPIAAB9QAAAPgIAMQgIAMgSAIQgSAIgfAAQgeAAgSgIgAgahJQgJAGAAANIAABsQAAANAJAHQAKAGAQABQARgBAKgGQAKgHAAgNIAAhsQAAgNgKgGQgKgHgRAAQgQAAgKAHg");
	this.shape_30.setTransform(57.8,88.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAi3IgwAAQgFAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAFAAICOAAQAEAAACACQACACAAAFIAAAVQAAAFgCACQgCACgEAAIgxAAIAAC3QAAAEgCADQgCACgEAAg");
	this.shape_31.setTransform(39.1,88.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhIB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAmQAAAPgIALQgIANgSAIQgSAIgdAAIgiAAIAABJQAAAEgCADQgCACgEAAgAgigDIAiAAQAQAAAKgHQAJgGAAgNIAAgWQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_32.setTransform(14.9,88.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_33.setTransform(-0.2,88.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AArB0QgEAAgCgDIgDgGIghhPIgBAAIgiAAIAABPQAAAEgCADQgCACgEAAIgeAAQgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAgQAAAQgJAMQgIAMgUAIIAkBWQACAEgCACQgDADgFAAgAgigJIAiAAQAQAAAKgHQAJgGAAgNIAAgQQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_34.setTransform(-14.8,88.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAi3IgwAAQgFAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAFAAICOAAQAEAAACACQACACAAAFIAAAVQAAAFgCACQgCACgEAAIgxAAIAAC3QAAAEgCADQgCACgEAAg");
	this.shape_35.setTransform(-33.6,88.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_36.setTransform(344.4,52.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_37.setTransform(317.7,52.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_38.setTransform(302.5,52.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAtB0QgEAAgDgCQgCgDgBgEIgeh1IgCgLIgCgMIgBgIIAAAIIgCANIgBAKIgfB1QgBAFgCACQgDACgEAAIgdAAQgEAAgCgCQgDgDAAgEIg2jVQgBgEABgCQABgDAFAAIAeAAQAEAAADADQACACABAEIAcBzIADANIACALIABAFIACgIIAEgVIAdhzQABgEACgCQADgDAFAAIAaAAQAFAAACADQACACABAEIAcBzIADANIACANIABAHIABgGIACgMIADgPIAehzQAAgEADgCQACgDAFAAIAaAAQAEAAABADQABACgBAEIg2DVQAAAFgDACQgDACgEAAg");
	this.shape_39.setTransform(283.6,52.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgwBvQgSgIgIgNQgIgMAAgPIAAh9QAAgOAIgNQAIgNASgIQASgIAeAAQAfAAASAIQASAIAIANQAIANAAAOIAAB9QAAAPgIAMQgIANgSAIQgSAHgfAAQgeAAgSgHgAgahKQgJAHAAANIAABsQAAAOAJAGQAKAGAQAAQARAAAKgGQAKgGAAgOIAAhsQAAgNgKgHQgKgFgRgBQgQABgKAFg");
	this.shape_40.setTransform(252.4,52.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAi3IgwAAQgFAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAFAAICOAAQAEAAACACQACACAAAFIAAAVQAAAFgCACQgCACgEAAIgxAAIAAC3QAAAEgCADQgCACgEAAg");
	this.shape_41.setTransform(233.8,52.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag7B0QgFAAgCgCQgBgDAAgEIAAjVQAAgEABgCQACgDAFAAIB0AAQADAAACACQADACAAAFIAAAVQAAAFgDACQgCACgDAAIhPAAIAAA3IBIAAQAFAAACACQADABgBAFIAAATQABAFgDABQgCACgFAAIhIAAIAABAIBRAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_42.setTransform(210.6,52.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAi3IgxAAQgEAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAEAAICPAAQAEAAACACQACACAAAFIAAAVQAAAFgCACQgCACgEAAIgxAAIAAC3QAAAEgCADQgCACgEAAg");
	this.shape_43.setTransform(193,52.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag7B0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBzAAQAFAAABACQACACAAAFIAAAVQAAAFgCACQgBACgFAAIhNAAIAAA3IBIAAQAEAAACACQACABAAAFIAAATQAAAFgCABQgCACgEAAIhIAAIAABAIBRAAQAEAAACACQACABAAAFIAAAVQAAAFgCACQgCACgEAAg");
	this.shape_44.setTransform(176.5,52.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhIB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAmQAAAPgIALQgIANgSAIQgSAIgdAAIgiAAIAABJQAAAEgCADQgCACgEAAgAgigDIAiAAQAQAAAKgHQAJgGAAgNIAAgWQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_45.setTransform(158,52.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABDB0QgEAAgCgCQgCgCAAgFIAAiAIgCAGIgEANIgEALIgaA/QgBAEgDADQgDACgEAAIgXAAQgFAAgCgDQgDgCgBgEIgdhEIgEgIIgCgKIgCgGIAAB/QAAAFgCACQgBACgFAAIgbAAQgEAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAEAAIAbAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIACADIA0B2IAFAKIADAKIAAAEIABgEIAEgJIAEgLIAyh2QAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAIAFgBIAcAAQAFAAACADQABACAAAEIAADVQAAAFgBACQgCACgFAAg");
	this.shape_46.setTransform(134.9,52.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgwBvQgSgIgIgNQgIgMAAgPIAAh9QAAgOAIgNQAIgNASgIQASgIAeAAQAfAAASAIQASAIAIANQAIANAAAOIAAB9QAAAPgIAMQgIANgSAIQgSAHgfAAQgeAAgSgHgAgahKQgJAHAAANIAABsQAAAOAJAGQAKAGAQAAQARAAAKgGQAKgGAAgOIAAhsQAAgNgKgHQgKgFgRgBQgQABgKAFg");
	this.shape_47.setTransform(111.9,52.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgvBvQgRgIgIgNQgHgMAAgPIAAh9QAAgOAHgNQAIgNARgIQASgIAdAAQAfAAARAIQARAIAIANQAHANAAAOIAAAQQAAAFgCACQgCACgEAAIgcAAQgFAAgCgCQgCgCAAgFIAAgIQABgNgKgHQgJgFgRgBQgQABgIAFQgJAHAAANIAABsQAAAOAJAGQAIAGAQAAQARAAAJgGQAKgGgBgOIAAgMQAAgFACgCQACgCAFAAIAcAAQAEAAACACQACACAAAFIAAAVQAAAPgHAMQgIANgRAIQgRAHgfAAQgdAAgSgHg");
	this.shape_48.setTransform(92.3,52.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAqQgCgBgCgFIgHgTQgBgEABgDQACgCAEgBQAJgDADgEQADgEAAgGIAAgXQAAgEACgCQACgCAEAAIAdAAQAEAAACACQABACAAAEIAAAZQAAATgMAMQgMANgXAGIgEAAIgDAAg");
	this.shape_49.setTransform(70.4,63.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgwBvQgSgIgIgNQgIgMAAgPIAAh9QAAgOAIgNQAIgNASgIQASgIAeAAQAfAAASAIQASAIAIANQAIANAAAOIAAB9QAAAPgIAMQgIANgSAIQgSAHgfAAQgeAAgSgHgAgahKQgJAHAAANIAABsQAAAOAJAGQAKAGAQAAQARAAAKgGQAKgGAAgOIAAhsQAAgNgKgHQgKgFgRgBQgQABgKAFg");
	this.shape_50.setTransform(56.4,52.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_51.setTransform(35.5,52.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_52.setTransform(20.2,52.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgvBvQgSgIgIgNQgHgMAAgPIAAgVQAAgFACgDQACgBAEAAIAdAAQAEAAACABQACADAAAFIAAAPQAAAMAJAHQAJAFARAAQARAAAJgFQAKgHAAgMIAAgLQgBgKgIgGQgIgFgMgEIg0gUQgNgEgJgLQgJgMAAgQIAAgUQAAgOAHgNQAHgNARgIQARgIAcAAQAeAAARAIQARAIAIANQAHANAAAOIAAAOQAAAEgCADQgCACgFAAIgcAAQgEAAgCgCQgCgDAAgEIAAgIQAAgMgIgGQgJgHgQAAQgQAAgIAHQgIAGAAAMIAAAFQAAAJAFAEQAEAEAFACIA6AVQARAGALALQAMAMAAASIAAAbQAAAPgIAMQgHANgSAIQgSAHgeAAQgdAAgSgHg");
	this.shape_53.setTransform(6,52.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_54.setTransform(-13.2,52.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvBvQgRgIgIgNQgHgMAAgPIAAh9QAAgOAHgNQAIgNARgIQARgIAeAAQAeAAASAIQARAIAIANQAHANAAAOIAAAQQAAAFgCACQgBACgFAAIgcAAQgFAAgCgCQgBgCAAgFIAAgIQAAgNgJgHQgKgFgRgBQgQABgIAFQgJAHAAANIAABsQAAAOAJAGQAIAGAQAAQARAAAKgGQAJgGAAgOIAAgMQAAgFABgCQACgCAFAAIAcAAQAFAAABACQACACAAAFIAAAVQAAAPgHAMQgIANgRAIQgSAHgeAAQgeAAgRgHg");
	this.shape_55.setTransform(-32,52.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_56.setTransform(341.3,16.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNB0QgFAAgCgCQgCgDAAgEIAAi3IgxAAQgEAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAEAAICOAAQAFAAACACQACACAAAFIAAAVQAAAFgCACQgCACgFAAIgwAAIAAC3QAAAEgBADQgCACgFAAg");
	this.shape_57.setTransform(323.5,16.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AArB0QgEAAgCgDIgDgGIghhPIgBAAIgiAAIAABPQAAAEgCADQgCACgEAAIgeAAQgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAgQAAAQgJAMQgIAMgUAIIAkBWQACAEgCACQgDADgFAAgAgigJIAiAAQAQAAAKgHQAJgGAAgNIAAgQQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_58.setTransform(305.2,16.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag7B0QgEAAgDgCQgBgDAAgEIAAjVQAAgEABgCQADgDAEAAIBzAAQAEAAADACQABACAAAFIAAAVQAAAFgBACQgDACgEAAIhOAAIAAA3IBIAAQAFAAACACQADABgBAFIAAATQABAFgDABQgCACgFAAIhIAAIAABAIBRAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_59.setTransform(286.5,16.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhJB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIA/AAQAdABATAGQASAHAHAMQAIALAAAPIAAAUQAAAMgGAKQgGAKgOAGQASAFAJALQAKAKgBAOIAAAbQABAPgIAMQgIAMgSAHQgSAIgeAAgAgjBPIAjAAQARAAAJgGQAKgGAAgNIAAgPQAAgLgKgHQgJgGgRAAIgjAAgAgjgTIAaAAQAPAAAKgGQAJgGAAgNIAAgMQABgNgLgEQgJgFgRAAIgYAAg");
	this.shape_60.setTransform(267.7,16.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ag5B0QgEAAgCgDQgBgCAAgEIAAjVQAAgEABgCQADgDAEAAIAeAAQAEAAACADQABACABAEIAAC4IBKAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_61.setTransform(249.8,16.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_62.setTransform(231.5,16.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgCAAgFIAAhKIhBiLQgBgEABgCQACgDAEAAIAiAAQAEAAACADIAEAGIAgBNIADAHIACAHIAAAFIABgFIADgHIACgHIAkhNIAEgGQACgCAEgBIAdAAQAFAAACADQACACgCAEIhBCFIAABQQAAAFgCACQgBACgFAAg");
	this.shape_63.setTransform(206.2,16.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_64.setTransform(186.3,16.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_65.setTransform(166.3,16.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNB0QgFAAgCgCQgCgDAAgEIAAi3IgxAAQgEAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAEAAICOAAQAFAAACACQACACAAAFIAAAVQAAAFgCACQgCACgFAAIgwAAIAAC3QAAAEgBADQgDACgEAAg");
	this.shape_66.setTransform(141.9,16.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_67.setTransform(124.2,16.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAtB0QgFAAgCgCQgDgDAAgEIgeh1IgCgLIgCgMIgBgIIAAAIIgCANIgCAKIgeB1QgBAFgCACQgCACgFAAIgdAAQgEAAgCgCQgCgDgBgEIg2jVQgCgEACgCQABgDAFAAIAeAAQAEAAACADQADACABAEIAdBzIACANIACALIABAFIACgIIAEgVIAdhzQABgEADgCQACgDAFAAIAaAAQAEAAADADQACACABAEIAdBzIACANIACANIABAHIABgGIACgMIADgPIAdhzQACgEACgCQACgDAFAAIAZAAQAEAAACADQACACgCAEIg2DVQgBAFgCACQgCACgFAAg");
	this.shape_68.setTransform(93.9,16.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgwBvQgSgJgIgMQgIgNAAgOIAAh9QAAgOAIgNQAIgNASgIQASgHAegBQAfABASAHQASAIAIANQAIANAAAOIAAB9QAAAOgIANQgIAMgSAJQgSAHgfABQgegBgSgHgAgahKQgJAHAAANIAABtQAAANAJAGQAKAHAQgBQARABAKgHQAKgGAAgNIAAhtQAAgNgKgHQgKgFgRAAQgQAAgKAFg");
	this.shape_69.setTransform(69.4,16.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_70.setTransform(48.5,16.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgCAAgFIAAhKIhBiLQgBgEABgCQACgDAEAAIAiAAQAEAAACADIAEAGIAgBNIADAHIACAHIAAAFIABgFIADgHIACgHIAkhNIAEgGQACgCAEgBIAdAAQAFAAACADQACACgCAEIhBCFIAABQQAAAFgCACQgBACgFAAg");
	this.shape_71.setTransform(22,16.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_72.setTransform(3.3,16.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag5B0QgEAAgBgDQgCgCAAgEIAAjVQAAgEACgCQABgDAFAAIAeAAQAEAAACADQABACAAAEIAAC4IBMAAQAEAAACACQACABAAAFIAAAVQAAAFgCACQgCACgEAAg");
	this.shape_73.setTransform(-13.4,16.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhIB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIBIAAQAdABASAHQASAIAIANQAIAMAAAPIAAAmQAAAPgIALQgIANgSAIQgSAIgdAAIgiAAIAABJQAAAEgCADQgCACgEAAgAgigDIAiAAQAQAAAKgHQAJgGAAgNIAAgWQAAgNgJgGQgKgGgQAAIgiAAg");
	this.shape_74.setTransform(-31.5,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.playnow, new cjs.Rectangle(-44,-7,411,155), null);


(lib.learnmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBjQgDAAgCgCQgCgCAAgDIAAhAIg3h2QgBgEABgCQABgCAEAAIAdAAQADAAACACQACACABAEIAcBCIACAGIACAGIAAADIABgDIACgGIACgGIAfhCIADgFQACgCADgBIAZAAQAEAAACACQABACgBAEIg3BxIAABFQAAADgCACQgBACgEAAg");
	this.shape.setTransform(394.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBjQgEAAgCgCIgDgFIgKgkIg1AAIgKAkIgDAFQgCACgEAAIgXAAQgEAAgCgCQgBgCABgDIA2i2QABgEACgCQACgCAEAAIAZAAQADAAADACQACACABAEIA2C2QABADgBACQgCACgDAAgAARAZIgJgfIgDgNIgDgQIgCgQIAAgIIgBAIIgCAPIgDARIgDANIgKAfIAkAAg");
	this.shape_1.setTransform(378.6,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBjQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgCAAgEIAAi1QAAgEABgCQABgCAEAAIAZAAQAFAAABACQABACAAAEIAACcIBAAAQAEAAACACQACABgBAEIAAATQABADgCACQgCACgEAAg");
	this.shape_2.setTransform(364.4,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BjQgEAAgBgCQgCgCAAgEIAAi1QAAgEACgCQABgCAEAAIA9AAQAZABAPAGQAQAHAGALQAHAKAAANIAAAhQAAAMgHAKQgGAKgQAHQgPAHgZAAIgdAAIAAA+QAAAEgBACQgCACgEAAgAgdgDIAdAAQANAAAJgFQAIgFAAgLIAAgTQAAgLgIgGQgJgFgNAAIgdAAg");
	this.shape_3.setTransform(348.9,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBeQgQgHgHgLQgGgKgBgMIAAhrQABgMAGgLQAHgKAQgIQAPgGAZAAQAaAAAQAGQAPAIAHAKQAGALAAAMIAABrQAAAMgGAKQgHALgPAHQgQAHgaAAQgZAAgPgHgAgVg+QgJAFAAALIAABcQAAAMAJAFQAHAGAOgBQAPABAIgGQAJgFAAgMIAAhcQAAgLgJgFQgIgGgPAAQgOAAgHAGg");
	this.shape_4.setTransform(325.5,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBjQgEAAgCgCQgCgCAAgEIAAicIgpAAQgEAAgBgCQgCgBAAgEIAAgTQAAgDACgCQABgCAEAAIB5AAQAEAAABACQACACAAADIAAATQAAAEgCABQgBACgEAAIgpAAIAACcQAAAEgCACQgBACgEAAg");
	this.shape_5.setTransform(309.6,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBjQgEAAgCgCIgDgFIgZhkIgCgJIgBgLIgBgHIAAAHIgCALIgBAJIgaBkQgBADgCACQgCACgEAAIgYAAQgEAAgCgCQgCgCAAgDIgvi2QAAgEABgCQABgCAEAAIAaAAQADAAACACQACACABAEIAZBiIACALIABAJIABAEIABgHIAEgRIAZhiQABgEACgCQACgCAEAAIAWAAQAEAAACACQACACABAEIAYBhIADAMIABALIABAGIABgFIACgLIACgMIAZhiQABgEACgCQACgCAEAAIAWAAQAEAAABACQABACgBAEIguC2QgBADgCACQgCACgEAAg");
	this.shape_6.setTransform(284.7,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBeQgQgHgHgLQgGgKAAgMIAAhrQAAgMAGgLQAHgKAQgIQAPgGAZAAQAaAAAPAGQAQAIAHAKQAHALgBAMIAABrQABAMgHAKQgHALgQAHQgPAHgaAAQgZAAgPgHgAgWg+QgIAFAAALIAABcQAAAMAIAFQAJAGANgBQAPABAIgGQAIgFABgMIAAhcQgBgLgIgFQgIgGgPAAQgNAAgJAGg");
	this.shape_7.setTransform(263.7,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBjQgEAAgBgCQgCgCAAgEIAAhNIg9AAIAABNQAAAEgCACQgBACgEAAIgZAAQgEAAgCgCQgBgCAAgEIAAi1QAAgEABgCQACgCAEAAIAZAAQAEAAABACQACACAAAEIAABIIA9AAIAAhIQAAgEACgCQABgCAEAAIAZAAQAEAAACACQABACAAAEIAAC1QAAAEgBACQgCACgEAAg");
	this.shape_8.setTransform(245.9,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBjQgEAAgCgCQgCgCAAgEIAAicIgpAAQgEAAgBgCQgCgBAAgEIAAgTQAAgDACgCQABgCAEAAIB5AAQAEAAABACQACACAAADIAAATQAAAEgCABQgBACgEAAIgpAAIAACcQAAAEgCACQgBACgEAAg");
	this.shape_9.setTransform(224,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBdQgQgHgHgLQgHgKABgMIAAiQQAAgEABgCQACgCAEAAIAZAAQAEAAACACQABACAAAEIAACJQAAALAIAFQAJAGANgBQAPABAIgGQAIgFABgLIAAiJQAAgEABgCQACgCAEAAIAZAAQAEAAABACQABACAAAEIAACQQABAMgHAKQgHALgQAHQgPAHgaAAQgZAAgPgHg");
	this.shape_10.setTransform(207.9,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBeQgPgHgGgLQgIgKAAgMIAAhrQAAgMAIgLQAGgKAPgIQAQgGAZAAQAaAAAPAGQAQAIAHAKQAHALAAAMIAABrQAAAMgHAKQgHALgQAHQgPAHgaAAQgZAAgQgHgAgWg+QgHAFgBALIAABcQABAMAHAFQAJAGANgBQAPABAIgGQAJgFgBgMIAAhcQABgLgJgFQgIgGgPAAQgNAAgJAGg");
	this.shape_11.setTransform(190.2,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag/BjQgEAAgBgCIgBgGIAAi1QAAgEABgCQACgCAEAAIA+AAQAaABAPAGQAQAHAHALQAHAKgBANIAABlQABANgHALQgHAKgQAHQgPAHgaAAgAgeBCIAeAAQAPAAAIgFQAIgGAAgKIAAhYQAAgLgIgGQgIgFgPAAIgeAAg");
	this.shape_12.setTransform(167,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AApBjIgEgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIg3hfIgJgQIgDgHIAABzQAAADgBACQgCACgEAAIgXAAQgDAAgCgCQgCgCAAgDIAAi2QAAgEACgCQACgCADAAIAXAAIAEABIACACIA6BjIAFAKIADAHIACAEIAAhzQAAgEABgCQACgCAEAAIAXAAQADAAACACQACACAAAEIAAC2QAAADgCACQgCACgDAAg");
	this.shape_13.setTransform(148.9,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBjQgEAAgCgCQgCgCABgEIAAi1QgBgEACgCQACgCAEAAIAXAAQAFAAABACQACACgBAEIAAC1QABAEgCACQgBACgFAAg");
	this.shape_14.setTransform(135.9,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0BjQgEAAgBgCQgCgCAAgEIAAi1QAAgEACgCQABgCAEAAIBpAAQAEAAACACQABACAAADIAAATQAAAEgBABQgCACgEAAIhJAAIAAAvIBEAAQAEAAABACQACABAAAEIAAASQAAADgCACQgBACgEAAIhEAAIAABNQAAAEgBACQgCACgEAAg");
	this.shape_15.setTransform(124.9,20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoBeQgQgHgHgLQgGgKgBgMIAAhrQABgMAGgLQAHgKAQgIQAPgGAZAAQAaAAAQAGQAPAIAHAKQAGALAAAMIAABrQAAAMgGAKQgHALgPAHQgQAHgaAAQgZAAgPgHgAgVg+QgJAFAAALIAABcQAAAMAJAFQAHAGAOgBQAPABAIgGQAJgFAAgMIAAhcQAAgLgJgFQgIgGgPAAQgOAAgHAGg");
	this.shape_16.setTransform(102.4,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBjQgEAAgCgCQgCgCAAgEIAAicIgpAAQgEAAgBgCQgCgBAAgEIAAgTQAAgDACgCQABgCAEAAIB5AAQAEAAABACQACACAAADIAAATQAAAEgCABQgBACgEAAIgpAAIAACcQAAAEgCACQgBACgEAAg");
	this.shape_17.setTransform(86.5,20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAkBjQgEAAgDgDIgEgEIg1hNIgFAAIAABNQAAADgCACQgBACgEAAIgZAAQgEAAgCgCQgBgCAAgDIAAi2QAAgEABgCQACgCAEAAIAZAAQAEAAABACQACACAAAEIAABOIAEAAIAzhOIAFgFQADgCAEgBIAbAAQADABABACQABACgCADIg9BZIBEBdQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgBADgEAAg");
	this.shape_18.setTransform(66.2,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoBeQgPgHgGgLQgGgKAAgMIAAhrQAAgMAGgLQAGgKAPgIQAPgGAZAAQAaAAAPAGQAPAIAGAKQAGALAAAMIAAAOQAAAEgBABQgCACgEAAIgYAAQgDAAgCgCQgCgBAAgEIAAgHQAAgLgHgFQgIgGgOAAQgOAAgHAGQgIAFAAALIAABcQAAAMAIAFQAHAGAOgBQAOABAIgGQAHgFAAgMIAAgKQAAgEACgCQACgBADgBIAYAAQAEABACABQABACAAAEIAAASQAAAMgGAKQgGALgPAHQgPAHgaAAQgZAAgPgHg");
	this.shape_19.setTransform(48.8,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMBjQgDAAgCgCQgBgCgBgEIAAi1QABgEABgCQACgCADAAIAZAAQAEAAABACQACACAAAEIAAC1QAAAEgCACQgBACgEAAg");
	this.shape_20.setTransform(36.4,20.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxBjQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgCAAgEIAAi1QAAgEACgCQACgCADAAIAaAAQADAAACACQACACAAAEIAACcIA/AAQAEAAABACQADABAAAEIAAATQAAADgDACQgBACgEAAg");
	this.shape_21.setTransform(26.1,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBeQgPgHgGgLQgGgKAAgMIAAhrQAAgMAGgLQAGgKAPgIQAPgGAZAAQAaAAAPAGQAPAIAGAKQAGALAAAMIAAAOQAAAEgBABQgCACgEAAIgYAAQgDAAgCgCQgCgBAAgEIAAgHQAAgLgHgFQgIgGgOAAQgOAAgHAGQgIAFAAALIAABcQAAAMAIAFQAHAGAOgBQAOABAIgGQAHgFAAgMIAAgKQAAgEACgCQACgBADgBIAYAAQAEABACABQABACAAAEIAAASQAAAMgGAKQgGALgPAHQgPAHgaAAQgZAAgPgHg");
	this.shape_22.setTransform(10.5,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.learnmore, new cjs.Rectangle(0,0,404.7,40.1), null);


(lib.instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAWQgEAAgCgCQgBgCAAgEIAAgbQAAgEABgCQACgCAEAAIAdAAQAEAAACACQACACAAAEIAAAbQAAAEgCACQgCACgEAAg");
	this.shape.setTransform(315.1,72.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBvQgSgJgIgMQgHgNAAgOIAAgWQAAgEACgDQACgCAEAAIAdAAQAEAAACACQACADAAAEIAAAQQAAAMAJAHQAJAFARABQARgBAJgFQAKgHAAgMIAAgLQgBgKgIgGQgIgFgMgEIg0gUQgNgEgJgLQgJgNAAgPIAAgUQAAgOAHgNQAHgNARgIQARgHAcgBQAeABARAHQARAIAIANQAHANAAAOIAAAOQAAAEgCADQgCABgFAAIgcAAQgEAAgCgBQgCgDAAgEIAAgIQAAgMgIgHQgJgFgQgBQgQABgIAFQgIAHAAAMIAAAFQAAAJAFAEQAEAEAFACIA6AUQARAHALALQAMAMAAATIAAAaQAAAOgIANQgHAMgSAJQgSAHgeABQgdgBgSgHg");
	this.shape_1.setTransform(301.2,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKB0QgEAAgCgDQgBgCgBgEIAAjVQABgEABgCQACgDAEAAIBKAAQAeABATAHQARAIAJANQAHAMABAPIAAB3QgBAPgHAMQgJANgRAIQgTAIgeAAgAgkBOIAkAAQARAAAKgHQAKgGgBgNIAAhnQABgNgKgGQgKgGgRAAIgkAAg");
	this.shape_2.setTransform(281.2,63.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_3.setTransform(259.9,63.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBvQgSgJgIgMQgIgNAAgOIAAh9QAAgOAIgNQAIgNASgIQASgHAegBQAfABASAHQASAIAIANQAIANAAAOIAAB9QAAAOgIANQgIAMgSAJQgSAHgfABQgegBgSgHgAgahKQgJAHAAANIAABtQAAANAJAGQAKAHAQgBQARABAKgHQAKgGAAgNIAAhtQAAgNgKgHQgKgFgRAAQgQAAgKAFg");
	this.shape_4.setTransform(239,63.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBvQgRgJgIgMQgHgNAAgOIAAh9QAAgOAHgNQAIgNARgIQARgHAegBQAeABASAHQASAIAHANQAHANAAAOIAAAQQAAAFgCACQgBACgFAAIgcAAQgEAAgCgCQgCgCAAgFIAAgIQgBgNgIgHQgKgFgQAAQgQAAgJAFQgIAHAAANIAABtQAAANAIAGQAJAHAQgBQAQABAKgHQAIgGABgNIAAgNQAAgEACgDQACgCAEAAIAcAAQAFAAABACQACADAAAEIAAAVQAAAOgHANQgHAMgSAJQgSAHgeABQgegBgRgHg");
	this.shape_5.setTransform(219.4,63.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7B0QgFAAgCgCQgBgDAAgEIAAjVQAAgEABgCQACgDAFAAIB0AAQADAAACACQADACAAAFIAAAVQAAAFgDACQgCACgDAAIhPAAIAAA3IBIAAQAFAAACACQADABgBAFIAAATQABAFgDABQgCACgFAAIhIAAIAABAIBRAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_6.setTransform(201.2,63.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBvQgSgJgIgMQgHgNAAgOIAAgWQAAgEACgDQACgCAEAAIAdAAQAEAAACACQACADAAAEIAAAQQAAAMAJAHQAJAFARABQARgBAJgFQAKgHAAgMIAAgLQgBgKgIgGQgIgFgMgEIg0gUQgNgEgJgLQgJgNAAgPIAAgUQAAgOAHgNQAHgNARgIQARgHAcgBQAeABARAHQARAIAIANQAHANAAAOIAAAOQAAAEgCADQgCABgFAAIgcAAQgEAAgCgBQgCgDAAgEIAAgIQAAgMgIgHQgJgFgQgBQgQABgIAFQgIAHAAAMIAAAFQAAAJAFAEQAEAEAFACIA6AUQARAHALALQAMAMAAATIAAAaQAAAOgIANQgHAMgSAJQgSAHgeABQgdgBgSgHg");
	this.shape_7.setTransform(182.4,63.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBtQgQgHgIgNQgGgMAAgPIAAgLQAAgEACgCQABgCAEAAIAdAAQAEAAACACQACACABAEIAAAEQAAANAHAGQAJAHAQAAQAQAAAIgHQAJgGAAgNIAAgdQAAgLgJgHQgIgGgQAAIg9AAQgEAAgBgCQgCgBAAgEIAAhmQAAgFACgCQABgCAEAAIB8AAQAEAAACACQACACAAAEIAAAWQAAAEgCACQgCACgEAAIhVAAIAAAtIAWAAQAdAAARAHQARAIAIAMQAHALAAAPIAAAqQABAPgIAMQgGANgRAHQgSAIgeAAQgdAAgSgIg");
	this.shape_8.setTransform(156.4,63.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDB1QgFAAgCgCQgCgCAAgFIAAgVQAAgFACgBQACgCAFAAIAuAAIAAiVIguAIQgEABgCgCQgDgCAAgEIAAgWQAAgFADgCQACgCAEgBIBTgPQADgBACACQADABAAAGIAAC7IAsAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_9.setTransform(137.6,63.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwIgKgTIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_10.setTransform(110.5,63.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_11.setTransform(95.3,63.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_12.setTransform(73.4,63.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_13.setTransform(53.4,63.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBvQgRgJgIgMQgHgNAAgOIAAh9QAAgOAHgNQAIgNARgIQARgHAegBQAeABASAHQARAIAIANQAHANAAAOIAAAQQAAAFgCACQgBACgFAAIgcAAQgFAAgCgCQgBgCAAgFIAAgIQAAgNgJgHQgKgFgRAAQgQAAgIAFQgJAHAAANIAABtQAAANAJAGQAIAHAQgBQARABAKgHQAJgGAAgNIAAgNQAAgEABgDQACgCAFAAIAcAAQAFAAABACQACADAAAEIAAAVQAAAOgHANQgIAMgRAJQgSAHgeABQgegBgRgHg");
	this.shape_14.setTransform(34.6,63.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwBtQgSgIgIgMQgIgNAAgOIAAipQAAgFACgCQACgCAFAAIAeAAQAEAAACACQACACAAAFIAACgQAAANAJAHQAKAGAQAAQARAAAKgGQAKgHAAgNIAAigQAAgFACgCQACgCAEAAIAeAAQAEAAACACQACACAAAFIAACpQAAAOgIANQgIAMgSAIQgSAIgfAAQgdAAgTgIg");
	this.shape_15.setTransform(7.5,63.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBvQgSgJgIgMQgIgNAAgOIAAh9QAAgOAIgNQAIgNASgIQASgHAegBQAfABASAHQASAIAIANQAIANAAAOIAAB9QAAAOgIANQgIAMgSAJQgSAHgfABQgegBgSgHgAgahKQgJAHAAANIAABtQAAANAJAGQAKAHAQgBQARABAKgHQAKgGAAgNIAAhtQAAgNgKgHQgKgFgRAAQgQAAgKAFg");
	this.shape_16.setTransform(-13.2,63.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgCAAgFIAAhKIhBiLQgBgEABgCQACgDAEAAIAiAAQAEAAACADIAEAGIAgBNIADAHIACAHIAAAFIABgFIADgHIACgHIAkhNIAEgGQACgCAEgBIAdAAQAFAAACADQACACgCAEIhBCFIAABQQAAAFgCACQgBACgFAAg");
	this.shape_17.setTransform(-32.7,63.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBvQgSgJgIgMQgHgNAAgOIAAgWQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAAAPQAAAOAJAFQAJAHARAAQARAAAJgHQAKgFAAgOIAAgKQgBgKgIgGQgIgGgMgDIg0gUQgNgEgJgMQgJgLAAgQIAAgUQAAgPAHgMQAHgNARgIQARgHAcAAQAeAAARAHQARAIAIANQAHAMAAAPIAAAOQAAAEgCACQgCACgFAAIgcAAQgEAAgCgCQgCgCAAgEIAAgIQAAgMgIgHQgJgFgQAAQgQAAgIAFQgIAHAAAMIAAAFQAAAJAFAEQAEAEAFACIA6AUQARAHALALQAMAMAAATIAAAaQAAAOgIANQgHAMgSAJQgSAHgeABQgdgBgSgHg");
	this.shape_18.setTransform(307.4,27.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_19.setTransform(288.2,27.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvBvQgSgJgIgMQgHgNAAgOIAAgWQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAAAPQAAAOAJAFQAJAHARAAQARAAAJgHQAKgFAAgOIAAgKQgBgKgIgGQgIgGgMgDIg0gUQgNgEgJgMQgJgLAAgQIAAgUQAAgPAHgMQAHgNARgIQARgHAcAAQAeAAARAHQARAIAIANQAHAMAAAPIAAAOQAAAEgCACQgCACgFAAIgcAAQgEAAgCgCQgCgCAAgEIAAgIQAAgMgIgHQgJgFgQAAQgQAAgIAFQgIAHAAAMIAAAFQAAAJAFAEQAEAEAFACIA6AUQARAHALALQAMAMAAATIAAAaQAAAOgIANQgHAMgSAJQgSAHgeABQgdgBgSgHg");
	this.shape_20.setTransform(262.6,27.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag7B0QgFAAgCgCQgBgDAAgEIAAjVQAAgEABgCQACgDAFAAIBzAAQAFAAACACQACACAAAFIAAAVQAAAFgCACQgCACgFAAIhOAAIAAA3IBIAAQAFAAACACQADABgBAFIAAATQABAFgDABQgCACgFAAIhIAAIAABAIBRAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_21.setTransform(244.6,27.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABDB0QgEAAgCgCQgCgCAAgFIAAiAIgCAGIgEANIgEALIgaA/QgBAEgDADQgDACgEAAIgXAAQgFAAgCgDQgDgCgBgEIgdhEIgEgIIgCgKIgCgGIAAB/QAAAFgCACQgBACgFAAIgbAAQgEAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAEAAIAbAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIACADIA0B2IAFAKIADAKIAAAEIABgEIAEgJIAEgLIAyh2QAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAIAFgBIAcAAQAFAAACADQABACAAAEIAADVQAAAFgBACQgCACgFAAg");
	this.shape_22.setTransform(222.7,27.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_23.setTransform(205.4,27.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNB0QgFAAgCgCQgCgDAAgEIAAi3IgxAAQgEAAgCgCQgCgCAAgFIAAgVQAAgFACgCQACgCAEAAICOAAQAFAAACACQACACAAAFIAAAVQAAAFgCACQgCACgFAAIgwAAIAAC3QAAAEgBADQgDACgEAAg");
	this.shape_24.setTransform(192.3,27.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgCAAgFIAAhKIhBiLQgBgEABgCQACgDAEAAIAiAAQAEAAACADIAEAGIAgBNIADAHIACAHIAAAFIABgFIADgHIACgHIAkhNIAEgGQACgCAEgBIAdAAQAFAAACADQACACgCAEIhBCFIAABQQAAAFgCACQgBACgFAAg");
	this.shape_25.setTransform(168.1,27.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAwB0IgFgBIgDgDIhBhwQgHgMgDgHIgDgJIAACHQAAAFgCACQgCACgEAAIgbAAQgFAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAFAAIAbAAIAEABIADADIBDB0IAGALIAEAJIACAEIAAiHQAAgEACgCQABgDAFAAIAbAAQAEAAACADQACACAAAEIAADVQAAAFgCACQgCACgEAAg");
	this.shape_26.setTransform(148.2,27.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_27.setTransform(128.2,27.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABDB0QgEAAgCgCQgCgCAAgFIAAiAIgCAGIgEANIgEALIgaA/QgBAEgDADQgDACgEAAIgXAAQgFAAgCgDQgDgCgBgEIgdhEIgEgIIgCgKIgCgGIAAB/QAAAFgCACQgBACgFAAIgbAAQgEAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAEAAIAbAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIACADIA0B2IAFAKIADAKIAAAEIABgEIAEgJIAEgLIAyh2QAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAIAFgBIAcAAQAFAAACADQABACAAAEIAADVQAAAFgBACQgCACgFAAg");
	this.shape_28.setTransform(106.1,27.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgvBvQgSgJgIgMQgHgNAAgOIAAgWQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAAAPQAAAOAJAFQAJAHARAAQARAAAJgHQAKgFAAgOIAAgKQgBgKgIgGQgIgGgMgDIg0gUQgNgEgJgMQgJgLAAgQIAAgUQAAgPAHgMQAHgNARgIQARgHAcAAQAeAAARAHQARAIAIANQAHAMAAAPIAAAOQAAAEgCACQgCACgFAAIgcAAQgEAAgCgCQgCgCAAgEIAAgIQAAgMgIgHQgJgFgQAAQgQAAgIAFQgIAHAAAMIAAAFQAAAJAFAEQAEAEAFACIA6AUQARAHALALQAMAMAAATIAAAaQAAAOgIANQgHAMgSAJQgSAHgeABQgdgBgSgHg");
	this.shape_29.setTransform(77.2,27.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA0B0QgEAAgCgCQgDgDgBgEIgMgpIg+AAIgMApIgDAHQgDACgEAAIgcAAQgEAAgCgCQgBgDABgEIA/jVQACgEACgCQACgDAFAAIAdAAQAEAAADADQACACABAEIBADVQABAEgCADQgBACgEAAgAAUAdIgLgkIgDgPIgEgUIgCgSIAAgJIgBAJIgDASIgDATIgEAPIgLAlIAqAAg");
	this.shape_30.setTransform(58,27.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAqB0QgEAAgDgDIgFgGIg/hZIgGAAIAABZQAAAFgCACQgCACgEAAIgeAAQgEAAgCgCQgCgCAAgFIAAjVQAAgEACgCQACgDAEAAIAeAAQAEAAACADQACACAAAEIAABbIAFAAIA8hbIAGgGQADgCAEgBIAgAAQAFABABACQABADgDADIhHBpIBQBsQACADgBADQgBADgEAAg");
	this.shape_31.setTransform(33.2,27.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgvBvQgSgJgHgMQgHgNAAgOIAAh9QAAgPAHgMQAHgNASgIQASgHAdAAQAfAAARAHQARAIAIANQAHAMAAAPIAAAQQAAAFgCACQgCACgEAAIgcAAQgEAAgDgCQgCgCAAgFIAAgIQABgNgKgHQgIgFgSAAQgPAAgJAFQgJAHABANIAABtQgBANAJAGQAJAHAPAAQASAAAIgHQAKgGgBgNIAAgNQAAgEACgCQADgDAEAAIAcAAQAEAAACADQACACAAAEIAAAVQAAAOgHANQgIAMgRAJQgRAHgfABQgdgBgSgHg");
	this.shape_32.setTransform(12.9,27.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOB0QgEAAgCgCQgCgDAAgEIAAjVQAAgEACgCQACgDAEAAIAdAAQAEAAACADQACACAAAEIAADVQAAAEgCADQgCACgEAAg");
	this.shape_33.setTransform(-1.8,27.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5B0QgEAAgBgDQgCgCAAgEIAAjVQAAgEACgCQACgDAEAAIAeAAQAEAAACADQACACAAAEIAAC4IBKAAQAFAAACACQACABAAAFIAAAVQAAAFgCACQgCACgFAAg");
	this.shape_34.setTransform(-13.7,27.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgvBvQgRgJgIgMQgHgNAAgOIAAh9QAAgPAHgMQAIgNARgIQARgHAeAAQAeAAASAHQARAIAIANQAHAMAAAPIAAAQQAAAFgCACQgBACgFAAIgcAAQgFAAgCgCQgBgCAAgFIAAgIQAAgNgJgHQgKgFgRAAQgQAAgIAFQgJAHAAANIAABtQAAANAJAGQAIAHAQAAQARAAAKgHQAJgGAAgNIAAgNQAAgEABgCQACgDAFAAIAcAAQAFAAABADQACACAAAEIAAAVQAAAOgHANQgIAMgRAJQgSAHgeABQgegBgRgHg");
	this.shape_35.setTransform(-32,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructions, new cjs.Rectangle(-44,4,411,82.5), null);


(lib.footer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer_1, new cjs.Rectangle(0,0,970,136), null);


(lib.buttonstop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttonstop, new cjs.Rectangle(0,0,284,235), null);


(lib.buttonflash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Buttonflash();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.Button();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,235);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDB356").s().p("AvxFyIAArjIfjAAIAALjg");
	this.shape.setTransform(101,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,0,202,74), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,970,250), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(0,0,970,250), null);


(lib.arriveleave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMB3QgFAAgBgDQgCgBAAgFIAAjbQAAgFACgCQACgCAFAAIBLAAQAfAAATAIQATAIAIANQAIANAAAPIAAB7QAAAPgIANQgIANgTAIQgTAIgfAAgAgkBQIAkAAQARAAAKgGQALgIAAgNIAAhpQAAgOgLgHQgKgGgRAAIgkAAg");
	this.shape.setTransform(521.7,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxB3IgFgBIgDgEIhDhyIgKgUIgDgJIAACMQAAAEgCACQgCACgFAAIgbAAQgFAAgCgCQgCgCAAgEIAAjdQAAgEACgCQACgCAFAAIAbAAIAEABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIBFB3IAFALIAFAJIACAFIAAiMQAAgEABgCQACgCAFAAIAcAAQAFAAACACQABACAAAEIAADdQAAAEgBACQgCACgFAAg");
	this.shape_1.setTransform(499.9,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9B3QgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIB3AAQAEAAADACQACACAAAEIAAAXQAAAEgCACQgDACgEAAIhQAAIAAA5IBKAAQAFAAACACQACACAAAFIAAATQAAAFgCACQgCACgFAAIhKAAIAABBIBTAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_2.setTransform(480.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBxQgSgHgIgNQgHgNAAgPIAAiBQAAgPAHgNQAIgNASgIQASgIAeAAQAgAAASAIQASAIAHANQAIANgBAPIAAAOQAAAFgCACQgBACgFAAIgdAAQgEAAgCgCQgCgCAAgFIAAgGQAAgMgKgIQgJgGgRAAQgRAAgJAGQgIAIAAAMIAABxQAAANAIAGQAJAHARAAQARAAAJgGQAKgIAAgMIAAgYIgjAAQgDAAgDgBQgCgDAAgEIAAgWQAAgEACgCQADgCADAAIBIAAQAEAAACACQACACAAAEIAAA+QABAPgIANQgHANgSAHQgSAJggAAQgeAAgSgJg");
	this.shape_3.setTransform(460.9,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9B3QgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIB3AAQAEAAADACQACACAAAEIAAAXQAAAEgCACQgDACgEAAIhQAAIAAA5IBKAAQAFAAACACQACACAAAFIAAATQAAAFgCACQgCACgFAAIhKAAIAABBIBTAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_4.setTransform(442.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7B3QgEAAgBgDQgCgBAAgFIAAjbQAAgFACgCQACgCAEAAIAfAAQAEAAADACQACACAAAFIAAC9IBMAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_5.setTransform(425.2,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2B3QgFAAgCgCQgCgCgBgEIgNgrIhAAAIgMArIgDAGQgDACgEAAIgdAAQgFAAgBgCQgCgCACgEIBBjdQABgEADgCQACgCAFAAIAdAAQAFAAADACQACACABAEIBCDdQABAEgCACQgBACgFAAgAAVAeIgMglIgDgQIgDgUIgDgSIAAgLIgBALIgDASIgDAUIgEAPIgMAmIAsAAg");
	this.shape_6.setTransform(399.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9B3QgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIB3AAQAEAAADACQACACAAAEIAAAXQAAAEgCACQgDACgEAAIhQAAIAAA5IBKAAQAFAAACACQACACAAAFIAAATQAAAFgCACQgCACgFAAIhKAAIAABBIBTAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_7.setTransform(374.7,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOB3QgFAAgCgCQgDgCgBgEIhBjdQgCgEACgCQABgCAFAAIAiAAQAEAAACACIAEAGIAhB3QADAKACAMIACATIABAJIABgJIAEgTIAEgWIAih3IAEgGQACgCAFAAIAeAAQAFAAABACQACACgBAEIhCDdQgBAEgCACQgDACgFAAg");
	this.shape_8.setTransform(355.5,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2B3QgFAAgCgCQgCgCgBgEIgNgrIhAAAIgMArIgDAGQgDACgEAAIgdAAQgFAAgBgCQgCgCACgEIBBjdQABgEADgCQACgCAFAAIAdAAQAFAAADACQACACABAEIBCDdQABAEgCACQgBACgFAAgAAVAeIgMglIgDgQIgDgUIgDgSIAAgLIgBALIgDASIgDAUIgEAPIgMAmIAsAAg");
	this.shape_9.setTransform(336.2,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9B3QgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIB3AAQAEAAADACQACACAAAEIAAAXQAAAEgCACQgDACgEAAIhQAAIAAA5IBKAAQAFAAACACQACACAAAFIAAATQAAAFgCACQgCACgFAAIhKAAIAABBIBTAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_10.setTransform(318.1,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6B3QgEAAgCgDQgCgBAAgFIAAjbQAAgFACgCQACgCAEAAIAfAAQAEAAACACQACACAAAFIAAC9IBNAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_11.setTransform(301.1,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAsB3QgEAAgBgDIgEgGIgihRIgBAAIgjAAIAABRQAAAFgCACQgCACgEAAIgfAAQgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIBKAAQAeAAATAIQASAIAIANQAIANAAAPIAAAhQAAAQgIANQgJAMgVAJIAmBYQABAEgCACQgDADgEAAgAgjgKIAjAAQAQAAAKgGQAKgHAAgNIAAgQQAAgOgKgHQgKgGgQAAIgjAAg");
	this.shape_12.setTransform(254.5,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9B3QgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIB3AAQAEAAADACQACACAAAEIAAAXQAAAEgCACQgDACgEAAIhQAAIAAA5IBKAAQAFAAACACQACACAAAFIAAATQAAAFgCACQgCACgFAAIhKAAIAABBIBTAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_13.setTransform(235.3,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAxB3IgFgBIgDgEIhDhyIgKgUIgDgJIAACMQAAAEgCACQgDACgEAAIgbAAQgGAAgBgCQgCgCAAgEIAAjdQAAgEACgCQABgCAGAAIAbAAIAEABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIBFB3IAFALIAFAJIACAFIAAiMQAAgEABgCQADgCAEAAIAcAAQAEAAADACQABACAAAEIAADdQAAAEgBACQgDACgEAAg");
	this.shape_14.setTransform(214.9,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxB3IgFgBIgDgEIhChyIgLgUIgEgJIAACMQAAAEgBACQgCACgFAAIgcAAQgEAAgCgCQgCgCAAgEIAAjdQAAgEACgCQACgCAEAAIAcAAIAFABQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABIBFB3IAFALIAFAJIABAFIAAiMQAAgEACgCQACgCAFAAIAcAAQAFAAACACQABACAAAEIAADdQAAAEgBACQgCACgFAAg");
	this.shape_15.setTransform(193.1,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOB3QgFAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAFAAIAdAAQAFAAACACQACACAAAFIAADbQAAAFgCACQgCACgFAAg");
	this.shape_16.setTransform(177.3,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAuB3QgEAAgDgCQgCgCgBgEIgfh6IgCgKIgCgNIgBgIIAAAIIgCANIgCAKIgfB6QgBAEgCACQgDACgFAAIgdAAQgEAAgDgCQgCgCgBgEIg4jdQgBgEACgCQABgCAFAAIAfAAQAEAAADACQACACABAEIAeB3IACAOIACAKIABAGIACgIIAEgWIAeh3IAEgGQACgCAFAAIAbAAQAFAAACACQADACABAEIAdB3IADAOIACAMIABAIIABgGIACgNIADgPIAeh3QABgEADgCQACgCAEAAIAbAAQAFAAABACQACACgBAEIg4DdQgBAEgDACQgCACgFAAg");
	this.shape_17.setTransform(157.8,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA2B3QgFAAgCgCQgCgCgBgEIgNgrIhAAAIgMArIgDAGQgDACgEAAIgdAAQgFAAgBgCQgCgCACgEIBBjdQABgEADgCQACgCAFAAIAdAAQAFAAADACQACACABAEIBCDdQABAEgCACQgBACgFAAgAAVAeIgMglIgDgQIgDgUIgDgSIAAgLIgBALIgDASIgDAUIgEAPIgMAmIAsAAg");
	this.shape_18.setTransform(126.7,23.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag9B3QgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIB3AAQAEAAADACQACACAAAEIAAAXQAAAEgCACQgDACgEAAIhQAAIAAA5IBKAAQAFAAACACQACACAAAFIAAATQAAAFgCACQgCACgFAAIhKAAIAABBIBTAAQAFAAACACQACABAAAFIAAAXQAAAEgCACQgCACgFAAg");
	this.shape_19.setTransform(101.8,23.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOB3QgFAAgCgCQgDgCgBgEIhBjdQgCgEACgCQABgCAFAAIAiAAQAEAAACACIAEAGIAhB3QADAKACAMIACATIABAJIABgJIAEgTIAEgWIAih3IAEgGQACgCAFAAIAeAAQAFAAABACQACACgBAEIhCDdQgBAEgCACQgDACgFAAg");
	this.shape_20.setTransform(82.6,23.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOB3QgFAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAFAAIAdAAQAFAAACACQACACAAAFIAADbQAAAFgCACQgCACgFAAg");
	this.shape_21.setTransform(68.2,23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAsB3QgEAAgBgDIgEgGIgihRIgBAAIgjAAIAABRQAAAFgCACQgCACgEAAIgfAAQgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIBKAAQAeAAATAIQASAIAIANQAIANAAAPIAAAhQAAAQgIANQgJAMgVAJIAmBYQABAEgCACQgDADgEAAgAgjgKIAjAAQAQAAAKgGQAKgHAAgNIAAgQQAAgOgKgHQgKgGgQAAIgjAAg");
	this.shape_22.setTransform(53.1,23.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAsB3QgEAAgBgDIgEgGIgihRIgBAAIgjAAIAABRQAAAFgCACQgCACgEAAIgfAAQgEAAgCgCQgCgCAAgFIAAjbQAAgFACgCQACgCAEAAIBKAAQAeAAATAIQASAIAIANQAIANAAAPIAAAhQAAAQgIANQgJAMgVAJIAmBYQABAEgCACQgDADgEAAgAgjgKIAjAAQAQAAAKgGQAKgHAAgNIAAgQQAAgOgKgHQgKgGgQAAIgjAAg");
	this.shape_23.setTransform(32.1,23.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA2B3QgFAAgCgCQgCgCgBgEIgNgrIhAAAIgMArIgDAGQgDACgEAAIgdAAQgFAAgBgCQgCgCACgEIBBjdQABgEADgCQACgCAFAAIAdAAQAFAAADACQACACABAEIBCDdQABAEgCACQgBACgFAAgAAVAeIgMglIgDgQIgDgUIgDgSIAAgLIgBALIgDASIgDAUIgEAPIgMAmIAsAAg");
	this.shape_24.setTransform(11.7,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arriveleave, new cjs.Rectangle(0,0,534.5,47.5), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttonstop();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,142,117.5);

	this.instance_1 = new lib.playstop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,142,117.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-117.5,284,235);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttonstop();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,142,117.5);

	this.instance_1 = new lib.playstop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,142,117.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-117.5,284,235);


// stage content:
(lib.AGLC5479_OnlineBillboard_970x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.my_btn.addEventListener("click", function () {
			$("#output").html(function(i, val) {
				return val * 1 + 1;
			});
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1003));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1003));

	// logo
	this.instance = new lib.tourneventlogo_1();
	this.instance.parent = this;
	this.instance.setTransform(168.6,92.9,0.534,0.534,0,0,0,81.5,85);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(800).to({_off:false},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:168.5,alpha:0.011},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.054},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:168.6,alpha:0.159},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:93,alpha:0.412},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:168.5,y:92.9,alpha:0.754},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:168.6,y:93,alpha:0.911},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:168.5,alpha:0.977},0).wait(1).to({scaleX:1,scaleY:1,x:168.6,y:92.9,alpha:1},0).wait(195));

	// click-learn-more
	this.instance_1 = new lib.learnmore();
	this.instance_1.parent = this;
	this.instance_1.setTransform(481.4,138.1,1,1,0,0,0,202.3,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(841).to({_off:false},0).wait(1).to({regX:202.9,regY:20.1,x:482.5,y:138.2,alpha:0.023},0).wait(1).to({x:484.4,alpha:0.107},0).wait(1).to({x:488.2,alpha:0.283},0).wait(1).to({x:494.3,alpha:0.557},0).wait(1).to({x:499.9,alpha:0.815},0).wait(1).to({x:503,alpha:0.955},0).wait(1).to({regX:202.3,regY:20,x:503.4,y:138.1,alpha:1},0).wait(155));

	// aaw, lal
	this.instance_2 = new lib.arriveleave();
	this.instance_2.parent = this;
	this.instance_2.setTransform(549.3,88.9,1,1,0,0,0,267.2,23.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(822).to({_off:false},0).wait(1).to({regX:266.3,x:549.1,alpha:0.037},0).wait(1).to({x:551.8,alpha:0.177},0).wait(1).to({x:557,alpha:0.453},0).wait(1).to({x:563,alpha:0.769},0).wait(1).to({x:566.5,alpha:0.951},0).wait(1).to({regX:267.2,x:568.3,alpha:1},0).wait(175));

	// yellow-bar
	this.instance_3 = new lib.yellowbar();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-523.8,90,1,1,0,0,0,510.4,24);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(814).to({_off:false},0).wait(1).to({regX:510.5,x:-496.4},0).wait(1).to({x:-390.1},0).wait(1).to({x:-142.2},0).wait(1).to({x:230.9},0).wait(1).to({x:447.3},0).wait(1).to({regX:510.4,x:498.5},0).wait(183));

	// footer
	this.instance_4 = new lib.footer_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(485,337,1,1,0,0,0,485,68);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(795).to({_off:false},0).wait(1).to({y:333.7,alpha:0.021},0).wait(1).to({y:321.8,alpha:0.098},0).wait(1).to({y:298,alpha:0.251},0).wait(1).to({y:261.7,alpha:0.486},0).wait(1).to({y:224.1,alpha:0.728},0).wait(1).to({y:198.4,alpha:0.894},0).wait(1).to({y:185.6,alpha:0.977},0).wait(1).to({y:182,alpha:1},0).wait(200));

	// button-stop
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(797,127.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(938,127.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(542).to({_off:false},0).wait(1).to({x:801.4},0).wait(1).to({x:820.1},0).wait(1).to({x:866.4},0).wait(1).to({x:914},0).wait(1).to({x:933.5},0).to({_off:true},1).wait(455));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(548).to({_off:false},0).wait(232).to({startPosition:0},0).to({alpha:0},6).wait(217));

	// button-flash
	this.instance_7 = new lib.buttonflash();
	this.instance_7.parent = this;
	this.instance_7.setTransform(797.5,129,1,1,0,0,0,142,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88).to({_off:true},1).wait(914));

	// button
	this.my_btn = new lib.Symbol1();
	this.my_btn.parent = this;
	this.my_btn.setTransform(142.6,115.5);
	this.my_btn._off = true;
	new cjs.ButtonHelper(this.my_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.my_btn).wait(89).to({_off:false},0).wait(452).to({_off:true},1).wait(461));

	// your-score
	this.instance_8 = new lib.yourscore();
	this.instance_8.parent = this;
	this.instance_8.setTransform(589.6,89.4,1,1,0,0,0,61.6,15.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({alpha:1},8).wait(443).to({regX:61.3,scaleX:1,scaleY:1,x:589.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:589.7,y:89.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:590.3,y:89.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:591.3,y:89},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:592.6,y:88.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:593.9,y:88.6},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:594.8,y:88.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:595.1,y:88.4},0).wait(1).to({regX:61.7,scaleX:1.32,scaleY:1.32,x:595.8},0).wait(232).to({alpha:0},6).wait(217));

	// box
	this.instance_9 = new lib.box();
	this.instance_9.parent = this;
	this.instance_9.setTransform(798,146.9,1,1,0,0,0,101,37);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).wait(1).to({x:795.7,alpha:0.012},0).wait(1).to({x:787.3,alpha:0.054},0).wait(1).to({x:768.8,alpha:0.148},0).wait(1).to({x:731.5,alpha:0.336},0).wait(1).to({x:669.5,alpha:0.649},0).wait(1).to({x:623.1,alpha:0.883},0).wait(1).to({x:604.5,alpha:0.977},0).wait(1).to({x:600,alpha:1},0).wait(683).to({alpha:0},6).wait(217));

	// play now
	this.instance_10 = new lib.playnow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(219.6,99.2,1,1,0,0,0,178.5,41.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(543).to({_off:false},0).wait(1).to({regX:155.8,regY:70.6,x:198.4,y:128.5,alpha:0.042},0).wait(1).to({x:205,alpha:0.227},0).wait(1).to({x:220.3,alpha:0.651},0).wait(1).to({x:230.6,alpha:0.938},0).wait(1).to({regX:178.5,regY:41.3,x:255.6,y:99.2,alpha:1},0).wait(232).to({alpha:0},6).wait(217));

	// even if you're not the fastest
	this.instance_11 = new lib.youcanstillwin();
	this.instance_11.parent = this;
	this.instance_11.setTransform(222.6,178.5,1,1,0,0,0,189.5,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(539).to({x:242.6,alpha:0},4).wait(460));

	// countdown
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B74B").s().p("AhmDxQglgRgQgcQgPgbAAggIAAgXQAAgKAEgEQAEgFAKAAIA9AAQAKAAAEAFQAEAEAAAKIAAAJQAAAcATANQASAOAkAAQAkAAASgOQASgNAAgcIAAgkQAAgcgRgNQgSgNglAAIg4AAQgKAAgEgFQgFgEAAgKIAAgqQAAgKAFgEQAEgEAKAAIAyAAQAlAAARgNQASgOAAgcIAAgVQAAgbgQgOQgPgOgjAAQglAAgQAOQgRAOABAbIAAAKQAAAJgFAFQgEAEgKAAIg9AAQgKAAgDgEQgEgFAAgJIAAgYQgBggAPgbQAOgbAkgRQAlgRBBgBQBAABAkAQQAkARAPAaQAOAbgBAfIAAA1QABAdgNATQgNATgeAKQAiAMAOAVQAOAWAAAcIAABCQAAAggPAaQgQAbglAQQglARhBAAQhBAAgmgRg");
	this.shape_1.setTransform(553.6,101.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B74B").s().p("AiOD/QgKAAgEgFQgFgEAAgKIAAiIQABgeAPgPQAPgOAUgHICWg/QALgDAJgKQAJgJABgVIAAgtQAAgcgSgOQgSgNgkAAQgkAAgSANQgRAOAAAcIAAAdQAAAKgEAEQgEAFgJAAIg+AAQgKAAgEgFQgEgEAAgKIAAgtQgBggAQgbQAPgbAlgRQAlgRBAgBQA/ABAmARQAmARAQAbQAQAbAAAgIAAA6QgBAkgLAXQgLAVgQANQgQANgPAGIh8A0QgRAGgJAJQgJAIAAASIAAAqIDVAAQAKAAAEAEQAFAEAAAKIAAAuQAAAKgFAEQgEAFgKAAg");
	this.shape_2.setTransform(553.9,101.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2B74B").s().p("AiTD+QgKABgEgFQgFgEAAgKIAAguQAAgKAFgFQAEgDAKAAIBkAAIAAlFIhkASQgJABgFgDQgFgFAAgJIAAgxQAAgJAFgFQAFgEAJgCIC1ghQAHgBAFADQAFADABANIAAGXIBhAAQAKAAAEADQAEAFAAAKIAAAuQAAAKgEAEQgEAFgKgBg");
	this.shape_3.setTransform(554.5,101.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},31).to({state:[{t:this.shape_3}]},28).to({state:[]},30).wait(914));

	// instructions
	this.instance_12 = new lib.instructions();
	this.instance_12.parent = this;
	this.instance_12.setTransform(255.6,99.2,1,1,0,0,0,178.5,41.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(539).to({x:274.6,alpha:0},4).wait(460));

	// bg-2
	this.instance_13 = new lib.bg2_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(485,126,1,1,0,0,0,485,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(786).to({_off:false},0).to({alpha:1},6).wait(211));

	// bg
	this.instance_14 = new lib.bg1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(485,126,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(792).to({alpha:0},6).wait(205));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,972,252.1);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/Buttonflash.png", id:"Buttonflash"},
		{src:"images/Buttonpressed.png", id:"Buttonpressed"},
		{src:"images/Button.png", id:"Button"},
		{src:"images/footer.png", id:"footer"},
		{src:"images/tourneventlogo.png", id:"tourneventlogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
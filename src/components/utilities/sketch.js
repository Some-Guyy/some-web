import '../../App.css';

export default function sketch(p) {
    let canvas;

    p.setup = _ => {
        canvas = p.createCanvas(200, 200);
    }

    p.draw = _ => {
        p.background(51);
        p.ellipse(p.mouseX, p.mouseY, 60, 60);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if (canvas) //Make sure the canvas has been created
            p.fill(newProps.color);
    }
}

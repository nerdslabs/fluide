/// <reference types="node" />
declare module "polyfills/props" {
    import Module from "module";
    export default class Props {
        tickTimout: NodeJS.Timer;
        tickInstances: Module[];
        private fps;
        constructor();
        addTickInstance(c: Module): void;
        tick(): void;
        static readonly get: Props;
    }
    global {
        interface Window {
            _fluide: Props;
        }
    }
}
declare module "module" {
    export default interface Module {
        onTick(): any;
    }
    export default abstract class Module {
        el: HTMLElement;
        constructor(el: HTMLElement | string);
    }
}
declare module "modal/main" {
    import Module from "module";
    export default class Modal extends Module {
        private options;
        private opened;
        private content;
        constructor(el: HTMLElement | string, options?: Options);
        open(): void;
        close(): void;
        isOpened(): boolean;
        setCloseable(state: boolean): void;
        isCloseable(): boolean;
        private bindEvents;
    }
    export interface Options {
        closeable: boolean;
    }
}
declare module "helpers" {
    export function debounce(callback: () => void, time: number): () => void;
}
declare module "scrollbar/events" {
    import Scrollbar from "scrollbar/main";
    export default class Events {
        private scrollbar;
        private currentY;
        constructor(scrollbar: Scrollbar);
        private mouseDown;
        private mouseMove;
        private mouseUp;
        private touchStart;
        private touchMove;
        private touchEnd;
        private userScrolled;
    }
}
declare module "scrollbar/main" {
    import Module from "module";
    export default class Scrollbar extends Module {
        wrapper: HTMLElement;
        scroll: HTMLElement;
        bar: HTMLElement;
        scrollHeight: number;
        maxPosition: number;
        height: number;
        width: number;
        private visibleProportion;
        private events;
        private barHeight;
        private position;
        private scrollClass;
        constructor(el: HTMLElement);
        wrap(): void;
        calculateSizes(): void;
        move(distance: number): void;
        setBarPosition(): void;
        onTick(): void;
        private createScroll;
    }
}
declare module "tooltip/main" {
    import Module from "module";
    export enum Position {
        TOP = "tooltip-top",
        BOTTOM = "tooltip-bottom",
        LEFT = "tooltip-left",
        RIGHT = "tooltip-right",
        CLASS = ""
    }
    export default class Tooltip extends Module {
        static Position: typeof Position;
        private tooltip;
        private position;
        constructor(el: HTMLElement | string, position?: Position);
        onTick(): void;
        show(): void;
        hide(): void;
        private mouseEnter;
        private mouseLeave;
        private updatePosition;
        private calculatePosition;
    }
}
declare module "fluide" {
    import Modal from "modal/main";
    import Scrollbar from "scrollbar/main";
    import Tooltip from "tooltip/main";
    const version = "__VERSION__";
    export { Modal, Scrollbar, Tooltip, version };
    const _default: {
        Scrollbar: typeof Scrollbar;
        Modal: typeof Modal;
        Tooltip: typeof Tooltip;
        version: string;
    };
    export default _default;
}

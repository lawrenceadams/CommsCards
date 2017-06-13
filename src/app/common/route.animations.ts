import { trigger, transition, style, animate } from "@angular/animations";

export const routeFadeStateTrigger = trigger('routeFadeState', [
    transition(":enter", [
        style({ opacity: 0 }),
        animate("0.2s")
    ]),
    // transition(":leave", animate("0.5s 0.5s", style({ opacity: 0 })))
    // ^^ Need to figure a way to get them moving out together nicely...
    // transition(":leave", [
    //     animate("0.2s"),
    //     style({ opacity: 0 }),
    // ])

    // Would need to have hooks for onDestroy() to trigger adding of next route.
])
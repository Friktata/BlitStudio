///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/components/Display.js
//
//

    export const Display = (() =>
    {

        return {

    //  The target element where this component will mount, this
    //  is a root component to it attaches to the main blitstudio
    //  component.
    //
            'target':           "blitstudio",
       
    //  ID for this component - this is also the ID used for
    //  the HTML element..
    //
            'id':               "blitstudio_root",

    //  Type is Panel since this component has child elements.
    //
            'type':             "Panel",

    //  Event handlers for the component - we can add handlers for
    //  common events, click, mousemove, etc.
    //
            'event_handlers':   {},

    //  Each component can apply its own styling, this can be an
    //  object of keyed properties or a string rendered in the
    //  HTML between <style></style> tags.
    //
            'style':            {},

    //  Alternatively, style can point to a .css file that will be
    //  loaded dynamically by the components manager - these files
    //  are located in assets/style by default.
    //
    //  If 'style' points to a file then you must set 'style_file'
    //  to true!
    //
            'style_file':       false,

    //  The termplate string to render - this should define the
    //  HTML for the component interface.
    //
            'template':         `Template string`,

    //  We can add a string template which is fine for smaller
    //  componets like buttons.
    //
    //  For larger, more complex components (Panel) we can set
    //  template_file to true, this tells the component manager that
    //  the template is stored in a file - these files are located
    //  in the assets/templates directory by default.
    //
            'template_file':    false

        };

    })();

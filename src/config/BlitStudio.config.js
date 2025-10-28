///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/BlitStudio.config.js
//
//

    export const BlitStudioConfig = (() =>
    {

    //  These will work for development but will probably need to
    //  tweak if this project goes live.
    //
        let     _components_path    = '../components';

        let     _template_path      = '../assets/templates';

        let     _style_path         = '../assets/style';


        const   _config             = {
            
            'components_path':      _components_path,

            'template_path':        _template_path,

            'style_path':           _style_path

        };

        return structuredClone(_config);

    })();

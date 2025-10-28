///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/TemplateModule.js
//
//  Module name should be the same as the file name and capitalised:
//
//      MyModule.js should export MyModule
//

    export const TemplateModule = () =>
    {

    /**************************************************************************
     *  Private (not returned) declarations have a __ prefix;
     */
        const   __private       = false;


    /**************************************************************************
     *  Anything made public has a _ prefix.
     */
        const   _state          = true;

    
    /**************************************************************************
     *  Private methods have a __ prefix.
     */
        const   __private_method = () =>
        {
            
            //

        };


    /**************************************************************************
     *  If we need a constructor:
     */
        const   __initialise = () =>
        {

            //

        };


    /**************************************************************************
     *  Public methods an _ prefix.
     */
        const   _get_state = () =>
        {

            return structuredClone(_state);

        };


    /**************************************************************************
     *  If we have a constructor:
     */
        if (typeof __initialise === 'function') {
            __initialise();
        }


    /**************************************************************************
     *  Public API.
     */
        return {

    //  Reveal any public methods.
    //
            get_state:          _get_state

        };

    };

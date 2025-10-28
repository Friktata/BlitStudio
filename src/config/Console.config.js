///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/core/Console.config.js
//
//

    export const ConsoleConfig = (() =>
    {

        const   _config = {

    //  We set this to production when the application goes live.
    //
            'system_mode':          'development',

    //  By default, BlitStudio will exit on any fatal error. Some errors are
    //  non-fatal (warnings), we can treat them like fatal errors by setting
    //  exit_on_warnings to true.
    //
    //  This means that, like fatal errros - non fatal warnings will be treated
    //  like fatal errors, you'll get an error message both in the UI and in
    //  the console and the application will terminate.
    //
            'exit_on_warnings':     true,

    //  By default, non-fatal warnings are always dumped to the console, we can
    //  disable this by setting 'enable_warnings' to false.
    //
            'enable_warnings':      true,

    //  By default, verbose logging is disabled in the console. This can be
    //  useful for bug tracking/diagnostics, setting 'enable_logging' to true
    //  will cause verbose logging to be dumped to the console.
    //
            'enable_logging':       true

        };

        return structuredClone(_config);

    })();

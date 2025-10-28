///////////////////////////////////////////////////////////////////////////////
//  BlitStudio/src/themes/Default.js
//
//

    export const DefaultThemes = (() => {

        const _themes = {

            'NES':                  {
                'name':             "NES",
                'width':            256,
                'height':           240,
                'aspect_ratio':     8 / 7,
                'bit_depth':        6,
                'max_colors':       56,
                'color_mode':       "indexed",
                'palette':          "nes_palette",
                'dithering':        "none",
                'gamma':            2.2,
                'notes':            "6-bit RGB (2 bits per channel), limited palette.",
                'font_family':      "'Press Start 2P', monospace",
                'font_path':        "assets/fonts/PressStart2P/PressStart2P-Regular.ttf"
            },

            'SNES':                 {
                'name':             "SNES",
                'width':            256,
                'height':           224,
                'aspect_ratio':     8 / 7,
                'bit_depth':        15,
                'max_colors':       256,
                'color_mode':       "indexed",
                'palette':          "snes_palette",
                'dithering':        "none",
                'gamma':            2.2,
                'notes':            "15-bit color, 32,768 total, 256 simultaneous on screen.",
                'font_family':      "'VT323', monospace",
                'font_path':        "assets/fonts/VT323/VT323-Regular.ttf"
            },

            'Gameboy':              {
                'name':             "Gameboy",
                'width':            160,
                'height':           144,
                'aspect_ratio':     1,
                'bit_depth':        2,
                'max_colors':       4,
                'color_mode':       "indexed",
                'palette':          "gameboy_palette",
                'dithering':        "none",
                'gamma':            1.8,
                'notes':            "Monochrome greenish display, 4 shades.",
                'font_family':      "'Early Gameboy', monospace",
                'font_path':        "assets/fonts/EarlyGameboy/EarlyGameboy-Regular.ttf"
            },

            'MasterSystem': {
                'name':             "MasterSystem",
                'width':            256,
                'height':           192,
                'aspect_ratio':     4 / 3,
                'bit_depth':        6,
                'max_colors':       64,
                'color_mode':       "indexed",
                'palette':          "sms_palette",
                'dithering':        "none",
                'gamma':            2.2,
                'font_family':      "'IBM Plex Mono', monospace",
                'font_path':        "assets/fonts/IBMPlexMono/IBMPlexMono-Regular.ttf"
            },

            'Genesis':              {
                'name':             "Genesis",
                'width':            320,
                'height':           224,
                'aspect_ratio':     4 / 3,
                'bit_depth':        9,
                'max_colors':       512,
                'color_mode':       "indexed",
                'palette':          "genesis_palette",
                'dithering':        "optional",
                'gamma':            2.2,
                'font_family':      "'VT323', monospace",
                'font_path':        "assets/fonts/VT323/VT323-Regular.ttf"
            },

            'Freestyle':            {
                'name':             "Freestyle",
                'width':            320,
                'height':           224,
                'aspect_ratio':     4 / 3,
                'bit_depth':        24,
                'max_colors':       16777216,
                'color_mode':       "truecolor",
                'palette':          null,
                'dithering':        "none",
                'gamma':            2.2,
                'font_family':      "'IBM Plex Mono', monospace",
                'font_path':        "assets/fonts/IBMPlexMono/IBMPlexMono-Regular.ttf"
            }
            
        };

        return _themes;

    })();

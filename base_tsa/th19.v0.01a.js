{
	"steam_appid": "2400360",
	"breakpoints": {
		"file_size": {
			"addr": "Rx1a6c"
		},
		"file_load": {
			"addr": "Rx1aa4"
		},
		"file_loaded": {
			"addr": "Rx733db"
		},
		"music_title": {
			"addr": "Rx70576"
		},
		"music_cmt": {
			"addr": [ "Rx70755", "Rx70879" ]
		},
		"spell_id": {
			"separator": "+",
			"spell_id": [
				{   // Character ID
					"type": "u32",
					"param": "[0x4d2814 - (((ecx - 0x4d49c0) / 0x3c) * 0x98)]",
				},
				{   // Subroutine name
					"type": "s",
					"param": "[[[[[[[edi+0x55C8]+0xC]+0x1018]+0x1218]+0x20c]+[[[edi+0x55C8]+0xC]+0x4]*8]]",
				},
				{   // Difficulty
					"type": "u32",
					"param": "[RxCB6BC]",
					"count_down": true
				},
			],
			"addr": "Rx27589",
			"cavesize": 6
		},
		"spell_name": {
			"spell_name": "[ebp+0xC]",
			"addr": "Rx1ffc1",
			"cavesize": 5
		}
	},
	"tsa_font_block": [
		"Rx131448",
		"Rx13144C",
		"Rx131450",
		"Rx131454",
		"Rx131458",
		"Rx13145C",
		"Rx131460",
		"Rx131464",
		"Rx131444",
		"Rx131440",
		"Rx131468",
		"Rx13146C",
		"Rx131470",
		"Rx131440"
	],
	"binhacks": {
		"quit_crash_fix": {
			"addr": "Rx40cb0",
			"code": "558bec568b7508578bf985f60f84d600000085ff0f84ce0000008b8734f0020083bc8724f0020000741b40898734f0020083f8047c0fc78734f0020003000000b8030000008b9714f002008d0c851400000085d274658b420489843910f002000f1f8400000000008b0239b088000000741f8b8734f002008b948724f002008d0c8785d274408b4204898124f00200ebd78b8f34f00200c7848f24f00200000000008b8f34f0020085c97e0749898f34f002008b025f5e5dc20400c7843910f00200000000008b8734f00200c7848724f00200000000008b8734f0020085c07e0748898734f002005f33c05e5dc20400"
		},
		"sprintf_th19_l": {
			"addr": "Rx8c7a7"
		},
		"sprintf_th19_rc": {
			"addr": [ "Rx8ca47", "Rx8c8c7" ]
		},
		"sprintf_rep": {
			"addr": [
				"Rx8c845",
				"Rx8c854",
				
				"Rx8c911",
				"Rx8c9bf",
				"Rx8c9d1",
				
				"Rx8ca91",
				"Rx8cB47",
				"Rx8cb59"
			]
		}
	}
}
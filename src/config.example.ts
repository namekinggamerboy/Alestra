import { KlasaClientOptions } from 'klasa';
import { Intents, IntentsFlags } from '@klasa/ws';

// eslint-disable-next-line no-process-env
export const DEV = 'DEV' in process.env ? process.env.DEV === 'true' : !('PM2_HOME' in process.env);
export const EVLYN_PORT = 3100;

export type DeepPartial<T> = {
	[P in keyof T]?:
	T[P] extends Array<infer U> ? Array<DeepPartial<U>> :
		T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> :
			DeepPartial<T[P]>
};

export const CLIENT_OPTIONS: DeepPartial<KlasaClientOptions> = {
	commands: {
		editing: true,
		messageLifetime: 200,
		prefix: DEV ? 'ad.' : 'a.',
		prefixCaseInsensitive: true,
		slowmode: 1000,
		slowmodeAggressive: true,
		typing: true,
		prompts: { limit: 5 }
	},
	console: { useColor: true, utc: true },
	pieces: { createFolders: false },
	cache: { limits: { messages: 20 } },
	consoleEvents: { verbose: true },
	dev: DEV,
	owners: [''],
	ws: {
		intents: new Intents([IntentsFlags.GuildMessages, IntentsFlags.Guilds]),
		additionalOptions: {
			presence: { status: 'online', activity: { type: 'LISTENING', name: 'Alestra, help' } }
		}
	}
};

export const TOKEN = '';

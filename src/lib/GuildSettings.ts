export type CustomGet<K extends string, TCustom> = K & { __type__: TCustom };

export function T<TCustom>(k: string): CustomGet<string, TCustom> {
	return k as CustomGet<string, TCustom>;
}

export namespace GuildSettings {
	export const StaffOnlyChannels = T<readonly string[]>('staffOnlyChannels');
	export const Prefix = T<string>('prefix');
}

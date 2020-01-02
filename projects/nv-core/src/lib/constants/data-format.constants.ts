export class DataFormatConstants {
    /**
     * comma separated values abc,xyz.
     */
    public static readonly CSV: string = 'CSV';

    /**
     *  space separated values abc xyz.
     */
    public static readonly SSV: string = 'SSV';

    /**
     *  tab separated values abc\txyz.
     */
    public static readonly TSV: string = 'TSV';

    /**
     *  pipe separated values abc|xyz.
     */
    public static readonly PIPES: string = 'PIPES';

    /**
     *  corresponds to multiple parameter instances instead of multiple values for a single instance abc=xyz&def=pqr.
     *  This is valid only for parameters in "query" or "formData".
     */
    public static readonly MULTI: string = 'MULTI';
}

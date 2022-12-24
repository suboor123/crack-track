
export abstract class Serializer<F, M> {
    /**
     * Holds the values of form
     */
    protected formValues: F;

    /**
     * Serialize object
     */
    protected abstract serializer(): M

    protected constructor(values: F, protected id?: string) {
        this.formValues = values
    }


    /**
     * Execute serialization and return entity model
     * @returns 
     * 
     */
    serialize(): M {
        return this.serializer()
    }

}

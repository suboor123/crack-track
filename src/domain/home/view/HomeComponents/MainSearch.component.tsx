const MainSearch = () => {
    return (
        <div className="subcribe-form mt-4 pt-2">
            <form>
                <div className="mb-0">
                    <input
                        type="text"
                        id="help"
                        name="name"
                        className="border shadow rounded-pill"
                        required
                        placeholder="Search your questions or topic..."
                    />
                    <button type="submit" className="btn btn-pills btn-primary">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MainSearch;

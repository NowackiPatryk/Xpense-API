module.exports = (err) => {
    console.log(err);
    res.json({
        status: "error",
        error: err.toString(),
    });
};

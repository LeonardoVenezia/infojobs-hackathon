export const mapItemsCandidate = (items)=> {
    return items.map(i => {
        return {
            title: i.position || i.title,
            subtitle: i.company,
            from: i.from,
            to: i.to,
            amountTime: i.amountTime,
            description: i.description,
        };
    })
}
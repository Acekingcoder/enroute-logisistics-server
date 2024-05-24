import joi from "joi";

export const options = {
    abortEarly: false,
    errors: { wrap: { label: "" } },
};

export const createOrderSchema = joi.object().keys({
    description: joi.string().required().max(1000),
    weight: joi.number(),
    specialInstruction: joi.string().required().max(1000),
    category: joi.string(),
    deliveryAddress: joi.object().keys({
        street: joi.string().required(),
        city: joi.string().required(),
        state: joi.string().required(),
        coordinates: joi.object().keys({
            lat: joi.number(),
            lng: joi.number(),
        }),
    }),
    pickupAddress: joi.object().keys({
        street: joi.string().required(),
        city: joi.string().required(),
        state: joi.string().required(),
        coordinates: joi.object().keys({
            lat: joi.number(),
            lng: joi.number(),
        }),
    }),
    pickupDate: joi.date().required(),
    // pickupType: joi.string().required().valid("express", "scheduled"),
    deliveryDate: joi.date(),
    recipient: joi.object().keys({
        name: joi.string().required(),
        phone: joi.string().required(),
    })
})

// add more validators here

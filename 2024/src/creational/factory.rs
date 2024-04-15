// Why do this?
// Pro: Easy for others to extend later
// Pro: Could re-use objects. IE: Maybe a car can take multiple deliveries?
// Pro: The concrete factory never exposes the underlying object. So it shields the internal implementation
// Con: All this crap below

pub enum DeliveryType {
    Road,
    Sea,
}

pub struct Delivery {}

trait Logistics {
    fn plan_delivery(&self, delivery: &Delivery);
}

trait Transport {
    fn deliver(&self, delivery: &Delivery);
}

struct RoadLogistics {}

struct Car {}

struct SeaLogistics {}

struct Ship {}

impl Logistics for RoadLogistics {
    fn plan_delivery(&self, delivery: &Delivery) {
        let car = Car {};

        car.deliver(delivery);
    }
}

impl Logistics for SeaLogistics {
    fn plan_delivery(&self, delivery: &Delivery) {
        let ship = Ship {};

        ship.deliver(delivery);
    }
}

impl Transport for Car {
    fn deliver(&self, _delivery: &Delivery) {
        // TODO
    }
}

impl Transport for Ship {
    fn deliver(&self, _delivery: &Delivery) {
        // TODO
    }
}

fn prep_deliveries(delivery_type: &DeliveryType) -> Box<dyn Logistics> {
    match delivery_type {
        DeliveryType::Road => Box::new(RoadLogistics {}),
        DeliveryType::Sea => Box::new(SeaLogistics {}),
    }
}

pub fn deliver_all(deliveries: &[Delivery]) {
    let config = DeliveryType::Road;
    let logistic = prep_deliveries(&config);

    deliveries
        .iter()
        .for_each(|delivery| logistic.plan_delivery(delivery));
}
